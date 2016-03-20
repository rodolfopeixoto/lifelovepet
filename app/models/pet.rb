class Pet < ActiveRecord::Base

      
      has_friendship
      scope :not_current_pet, ->(user) { where.not(id: user.pet.id) . where(animal: user.pet.animal) . where(breed: user.pet.breed) . where(size: user.pet.size) . where.not(gender: user.pet.gender)  }
      default_scope { order('RANDOM()').limit(2) }
      scope :not_pending, ->(user) { user.pet.friendships.where(status: "pending") } #not function 

      validates :picture, presence: false,  allow_nil: false
 

      belongs_to :user

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

end

