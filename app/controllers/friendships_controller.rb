class FriendshipsController < ApplicationController

    before_action               :authenticate_user! 
	before_action               :set_friend

	def like

		@inverse_frienship = current_user.pet.inverse_friendships.where(pet_id: @friend.id)

		unless @inverse_frienship.blank?
			@friend.accept_match(current_user.pet)
			@match = true
		else
			current_user.pet.request_match(@friend)
		end

		respond_to do |format|
			format.js
		end

	end


	def dislike
	  @inverse_frienship = current_user.pet.inverse_friendships.where(pet_id: @friend.id)
	  unless @inverse_frienship.blank?
	  	@friend.reject_match(current_user.pet)
	  else
	  	current_user.pet.request_match(@friend) 
	  	current_user.pet.reject_match(@friend)
	  end
	end

	def destroy
		current_user.pet.remove_match(@friend)
		respond_to do |format|
			format.html { redirect_to pets_path}
		end
	end


	private

	def set_friend
		@friend = Pet.find(params[:friend_id])
	end



end