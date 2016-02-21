class Friendship < ActiveRecord::Base
	belongs_to :pet
	belongs_to :friend, class_name: "Pet"
end
