class Pet < ActiveRecord::Base

      default_scope { order('RANDOM()').limit(2) }  
      scope :not_current_pet, ->(user) { where.not(id: user.pet.id)           }
      scope :animal,          ->(user) { where(animal: user.pet.animal)       }
      scope :breed,           ->(user) { where(breed: user.pet.breed)         } 
      scope :gender,          ->(user) { where.not(gender: user.pet.gender)   } 
 

      belongs_to :user
      has_friendship
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
  validates :picture, presence: false,  allow_nil: false

  def self.pending(current_pet)
    current_pet.friendships.where.not(status: "pending").where.not(status: "blocked").collect{ |animal|  Pet.find(animal.friend_id) }
  end

end

