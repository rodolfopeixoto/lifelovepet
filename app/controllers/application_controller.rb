class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_locale

  def set_locale
    I18n.locale = params[:locale] || session[:locale] || I18n.default_locale
    session[:locale] = I18n.locale
  end

  def default_url_options(options = {})
    { locale: I18n.locale}.merge options
  end

  protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up)        { |u| u.permit(:email, :firstName, :lastName, :dateOfBirth, :age, :gender, :password, :password_confirmation, :city, :location, :state, :role ) }
      devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:email, :firstName, :lastName, :dateOfBirth, :age, :gender, :password, :current_password, :city, :location, :state, :role ) }
    end

end