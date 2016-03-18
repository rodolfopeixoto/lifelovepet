class FriendshipsController < ApplicationController
	 before_action :authenticate_user!
   before_action :set_friend

	 def create
       @inverse_friendship = current_user.pet.inverse_friendships.where(pet_id: @friend.id)

       unless @inverse_friendship.blank?
         @friend.accept_match(current_user.pet)
         @friend.save
         @match = true
       else
       	@friendship = current_user.pet.request_match(@friend)
       end


       respond_to do |format|
         format.js
       end
   

	 end

   #friendships_controller.rb
   def dislike
      @friendship = current_user.pet.dislike_friendship(@friend)  
      render nothing: true
   end

	 def destroy
       @friendship = current_user.pet.remove_match(@friend)

       respond_to do |format|
         format.html { redirect_to pets_path }
       end
	 end

  private

  def set_friend
    @friend = Pet.find(params[:friend_id])  
  end 
end
