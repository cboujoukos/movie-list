class User < ApplicationRecord
  has_secure_password
  has_many :lists
  has_many :user_movie_reviews
  has_many :reviews, through: :user_movie_reviews
end
