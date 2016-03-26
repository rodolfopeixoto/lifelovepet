class PetsController < ApplicationController
  before_action               :authenticate_user! 
  before_action               :set_friend_id, only:    [:like, :dislike]
  before_action               :set_pet,       only:    [:show, :edit, :update, :destroy, :profileuser, :get_email]
  before_action               :check_user,    only:    [:edit, :destroy, :update] 
  load_and_authorize_resource except: [:create, :dislike, :like]


  def index
 
      if params[:id]
        @pets = Pet.not_current_pet(current_user).animal(current_user).breed(current_user).gender(current_user).where('id < ?', params[:id]).limit(10) - current_user.pet.matches(current_user.pet)
      else
        @pets = Pet.not_current_pet(current_user).animal(current_user).breed(current_user).gender(current_user).limit(10) - current_user.pet.matches(current_user.pet)
      end

      respond_to do |format|
        format.html
        format.js
      end
  end


def new
  @pet = Pet.new
end

def create
  if current_user.pet.nil?
    @pet = current_user.build_pet(pet_params)

    if @pet.save
     flash[:notice] = "Seu Pet foi cadastrado com sucesso."
     redirect_to authenticated_root_path
   else
     flash[:alert] = "Desculpe-nos, mas houve algum problema e seu pet não foi cadastrado."
     render "new"
   end
 else
  flash[:alert] = "Você só pode cadastrar 1 Pet."
  redirect_to pets_path
 end
end

def show
end

def edit
end

def update
 self.update_pet
end

def destroy
  @pet.destroy
  flash[:notice] = "Perfil do seu pet foi excluído com sucesso"

  redirect_to @pet
end

def update_pet
  if @pet.update(pet_params)
    flash[:notice] = "As informações do seu Pet foram atualizadas com sucesso."
    redirect_to @pet
  else
    flash[:alert] = "Não conseguimos atualizar as informações do seu Pet."
    render "edit"
  end
end

def check_user
  redirect_to pets_path unless current_user.id == @pet.user_id
end

def profileuser
end

def matches
    authorize! :read, @user
    @matches = current_user.friendships.where(state: "ACTIVE").map(&:friend) + current_user.inverse_friendships.where(state: "ACTIVE").map(&:user)
  end


  def get_email
    respond_to do |format|
      format.js
    end
  end

#Friendship
def like

  if current_user.pet.friendships.where(friend_id: @inverse_pet.id, status: "pending").exists?
    current_user.pet.accept_request(@inverse_pet) 
    render nothing: true
  else
    current_user.pet.friend_request(@inverse_pet)
    render nothing: true 
  end 

end


def dislike
    if current_user.pet.friendships.where(friend_id: @inverse_pet.id, status: "requested").exists?
      current_user.pet.block_friend(@inverse_pet)
     render nothing: true
    else
      current_user.pet.friend_request(@inverse_pet) 
      current_user.pet.block_friend(@inverse_pet)
     render nothing: true
    end
end
# FRIENDSHIP
private

  def pet_params
    params.require(:pet).permit(:name, :size, :gender, :age, :breed, :ageMonth, :animal, :user_id, :bio, :picture)
  end

  def set_pet
    @pet = Pet.find(params[:id])  
  end

  def set_friend_id
      @inverse_pet = Pet.find(params[:friend_id])
  end

end