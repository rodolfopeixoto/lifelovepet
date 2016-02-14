FactoryGirl.define do

	sequence(:email) { |n| "user#{n}@exemple.com" }

	 factory :user do
				email                  { generate(:email) }
				password               "f4k3p455w0rd"
				password_confirmation  "f4k3p455w0rd"  
     end
end