class Pet < ActiveRecord::Base
      
      belongs_to :user

      has_attached_file :picture,
                        :storage => :s3,
                        :styles => { :medium => "324x204!", :thumb => "100x100!" },
                        :default_url => "/assets/normal/missing.jpg",
                        :bucket => "3lovet",
                        :s3_credentials => {
                        :access_key_id => "AKIAJEMJ4MAVIKZFOCUQ",
                        :secret_access_key => "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"
                          }
                        
      
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
 

	  default_scope { order('id DESC') }
end