require 'rails_helper'

RSpec.describe User, type: :model do
  describe "password" do
    it "needs a password and confirmation to save" do
      u = User.new(email: "lovet@3lovet.com")

      u.save
      expect(u).to_not be_valid

      u.password                = "password"
      u.password_confirmation   = ""
      u.save
      expect(u).to_not be_valid 

      u.password_confirmation   = "password"
      u.save
      expect(u).to be_valid 

    end

    it "needs password and confirmation to match" do
      u = User.create( 
             email:                 "lovet@3lovet.com",
             password:              "password",
             password_confirmation: "asd"
      	)

      expect(u).to_not be_valid
    end

  it "requires an email" do
    u = User.new(
            password:              "password",
            password_confirmation:  "password"
    	)

    u.save
    expect(u).to_not be_valid
  end
 
  end
end