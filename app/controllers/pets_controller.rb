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
      @pet = Pet.new(pet_params)

      if @pet.save
      	flash[:notice] = "Pet has been created."
      	redirect_to authenticated_root_path
      else
      	flash[:alert] = "Pet has not been created."
      	render "new"
      end
	end

	def show
	end

	def edit
	end

	def update
      if @pet.update(pet_params)
      	flash[:notice] = "Pet has been updated."
      	redirect_to @pet
      else
      	flash[:alert] = "Pet has not been updated."
      	render "edit"
      end
    end

    def destroy
      @pet.destroy
      flash[:notice] = "Pet has been deleted."

      redirect_to @pet
    end

	private

	def pet_params
      params.require(:pet).permit(:name,:size,:dateOfBirth,:age,:animal,:breed,:bio)
	end

	def set_pet
      @pet = Pet.find(params[:id])  
	end
end