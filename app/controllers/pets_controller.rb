class PetsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_pet, only: [:show, :edit, :update, :destroy]

	def index
		@pets = Pet.includes(:user).all
	end

	def profile
	end

	def new
      @pet = Pet.new
	end

	def create
      @pet = Pet.new(pet_params)

      if @pet.save
      	flash[:notice] = "Seu amiguinho foi cadastrado com sucesso."
      	redirect_to authenticated_root_path
      else
      	flash[:alert] = "Desculpe-nos, mas houve algum problema e seu amiguinho não foi cadastrado."
      	render "new"
      end
	end

	def show
	end

	def edit
	end

	def update
      if @pet.update(pet_params)
      	flash[:notice] = "Informações do seu amiguinho foi atualizada com sucesso."
      	redirect_to @pet
      else
      	flash[:alert] = "Não conseguimos atualizar as informações do seu amiguinho."
      	render "edit"
      end
    end

    def destroy
      @pet.destroy
      flash[:notice] = "Você excluiu o perfil do seu Pet, esperamos que cadatra-se novamente, sentiremos saudade."

      redirect_to @pet
    end

	private

	def pet_params
      params.require(:pet).permit(:name,:size, :dateOfBirth, :age, :animal, :breed, :bio)
	end

	def set_pet
      @pet = Pet.find(params[:id])  
	end
end