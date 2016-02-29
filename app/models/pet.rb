class Pet < ActiveRecord::Base

      validates :picture, presence: false,  allow_nil: false

      default_scope { order('id DESC') }
 

      belongs_to :user
      has_many :friendships, dependent: :destroy
      has_many :inverse_friendships, class_name: "Friendship", foreign_key: "friend_id", dependent: :destroy

      has_attached_file :picture,
                        :storage => :s3,
                        :styles => { :medium => "324x204!", :thumb => "100x100!" },
                        :default_url => "/images/:style/missing.jpg",
                        :bucket => "3lovet",
                        :s3_credentials => {
                        :access_key_id => "AKIAJEMJ4MAVIKZFOCUQ",
                        :secret_access_key => "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"
                          } 
                        
      
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/


  def self.animal(pet)
      case pet.animal
        when "cat"
          where('animal = ?', 'cat')
        when "dog"
          where('animal = ?', 'dog')
        else
          all
      end
  end

  def self.not_me(current_user)
      where.not(id: current_user.pet.id)
  end



  #Friendship
  def matches(current_user)
      friendships.where(state: "peding").map(&friend) + current_user.pet.friendships.where(state: "ACTIVE").map(&:friend) + current_user.pet.inverse_friendships.where(state: "ACTIVE").map(&:pet)
  end


  def request_match(pet_2)
    self.friendships.create(friend: pet_2)
  end

  def request_unlike(pet_2)
    self.friendships.create(friend: pet_2)
  end

  def accept_match(pet_2)
    self.friendships.where(friend: pet_2).first.update_attributes(:state, "ACTIVE")
  end

  def dislike_friendship(pet_2)
    self.friendships.create(friend: pet_2)
    self.friendships.where(friend: pet_2).first.update_attributes(state: "dislike", friended_at: Time.now)
  end

  def self.not_show_dislike(pet_friend)
    pet_friend.where.not(state: "dislike")
  end

  def remove_match(pet2)
    inverse_friendship = inverse_friendships.where(pet_id: pet2).first

    if inverse_friendship
      self.inverse_friendships.where(pet_id: pet2).first.destroy
    else
      self.friendships.where(friend_id: pet2).first.destroy
    end
  end

end

