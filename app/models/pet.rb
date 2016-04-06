class Pet < ActiveRecord::Base

      default_scope { order('RANDOM()').limit(2) }  
      scope :not_current_pet, ->(user) { where.not(id: user.pet.id)           }
      scope :animal,          ->(user) { where(animal: user.pet.animal)       }
      scope :breed,           ->(user) { where(breed: user.pet.breed)         } 
      scope :gender,          ->(user) { where.not(gender: user.pet.gender)   } 
 

      belongs_to :user
      has_many :friendships, dependent: :destroy
      has_many :inverse_friendships, class_name: "Friendship", foreign_key: "friend_id", dependent: :destroy
      has_attached_file :picture,
                        :storage     => :s3, 
                        :s3_host_name => 's3-sa-east-1.amazonaws.com', 
                        :styles => { :medium => "324x204!", :thumb => "100x100!" },
                         :default_url => "/images/:style/missing.jpg" 
                        
      
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/ 
  validates :picture  , presence: false,  allow_nil: false
  validates :name     , presence: true
  validates :size     , presence: true
  validates :gender   , presence: true
  validates :animal   , presence: true
  #validates :breed    , presence: true
  validates :bio      , presence: true


  # Friendship Methods
  def request_match(pet2)
    self.friendships.create(friend: pet2)
  end

  def accept_match(pet2)
    self.friendships.where(friend: pet2).first.update_attribute(:state, "ACTIVE")
  end

  def reject_match(pet2)
    self.friendships.where(friend: pet2).first.update_attribute(:state, "dislike")
  end

  def remove_match(pet2)
    
    inverse_friendship = inverse_friendships.where(pet_id: pet2).first

    if inverse_friendship
      self.inverse_friendships.where(pet_id: pet2).first.destroy
    else
      self.friendships.where(friend_id: pet2).first.destroy
    end

  end
  #Friendships Methods


  # Filter Methods

  def matches(current_user)
    friendships.where(state: "pending").map(&:friend) + friendships.where(state: "dislike").map(&:friend) + current_user.friendships.where(state: "ACTIVE").map(&:friend) + current_user.inverse_friendships.where(state: "ACTIVE").map(&:pet) 
  end
  # Filter Methods


end

