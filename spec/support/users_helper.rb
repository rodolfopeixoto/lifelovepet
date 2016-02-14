module UserHelper
  def login(a)
    visit root_path

    fill_in 'Email', with: a.email
    fill_in 'Password', with: a.password
    click_button 'Log in'
  end

  def logout(a)
    visit '/users/sign_in'
    click_link 'Sign out'
  end

  def sign_in_as!(user)
		 visit '/users/sign_in'

		 fill_in "Email",    with: user.email
		 fill_in "Password", with: user.password

		 click_button 'Log in'
		 expect(page).to have_content("Signed in successfully.")
  end

  def login_user
    before(:each) do
      @request.env["devise.mapping"] = Devise.mapping[:user]
      user = FactoryGirl.create(:user)
      user.confirm!
      sign_in user
    end
  end

end

RSpec.configure do |c|
  c.include UserHelper, type: :feature
end