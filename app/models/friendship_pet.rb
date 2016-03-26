module FriendshipsWithPet
	def friend_pet
		has_many :custom_friends, -> { where(friendships: {status: 'accepted' }).or(friendships: {status: 'pending'}).not }, through: :friendships
	end
end