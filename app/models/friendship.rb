class Friendship < ActiveRecord::Base
	belongs_to :pet
	belongs_to :friend, class_name: "Pet"

  scope :liked,    -> { where(state: "like") }
  scope :disliked,  -> { where(state: "disliked") }
  scope :pending,  -> { where(state: "pending") }
  scope :not_disliked, -> { where.not(state: "dislike") }
  
  # AR Scope with params
  scope :by_state, -> (param) { where(state: param) }
end
