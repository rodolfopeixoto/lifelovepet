class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_filter :configure_permitted_parameters, if: :devise_controller?

  before_action do
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def default_url_options
    { locale: I18n.locale}
  end

  protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up)        { |u| u.permit(:email, :firstName, :lastName, :dateOfBirth, :age, :gender, :password, :password_confirmation, :city, :location, :state ) }
      devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:email, :firstName, :lastName, :dateOfBirth, :age, :gender, :password, :current_password, :city, :location, :state ) }
    end

end
