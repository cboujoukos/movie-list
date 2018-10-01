class ApplicationController < ActionController::API
  include Knock::Authenticable
  # include ActionController::RequestForgeryProtection
  # protect_from_forgery with: :exception, unless: -> { request.format.json? }

  # def set_current_user
  #   User.current = current_user
  # end

  def authenticate_api_user
    authenticate_for Api::User
  end
end
