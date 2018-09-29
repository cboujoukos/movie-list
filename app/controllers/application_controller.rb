class ApplicationController < ActionController::API
  include Knock::Authenticable
  # protect_from_forgery unless: -> { request.format.json? }

  def authenticate_api_user
    authenticate_for Api::User
  end
end
