class PetsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_pet, only: [:show, :edit, :update, :destroy]

	def index
		@pets = Pet.all
	end

	def profile
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
      if @pet.update(pet_params)
      	flash[:notice] = "As informações do seu Pet foram atualizadas com sucesso."
      	redirect_to @pet
      else
      	flash[:alert] = "Não conseguimos atualizar as informações do seu Pet."
      	render "edit"
      end
    end

    def destroy
      @pet.destroy
      flash[:notice] = "Perfil do seu pet foi excluído com sucesso"

      redirect_to @pet
    end

	private

  def pet_params
      params.require(:pet).permit(:name, :size, :age,:ageMonth, :animal, :breed, :user_id, :bio, :picture)
  end

	def set_pet
      @pet = Pet.find(params[:id])  
	end
end