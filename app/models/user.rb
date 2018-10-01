class User < ApplicationRecord
  has_secure_password
  has_many :lists
  has_many :user_movie_ratings
  has_many :movies, through: :user_movie_ratings
end
