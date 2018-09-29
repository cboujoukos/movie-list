class Movie < ApplicationRecord
  has_many :list_movies
  has_many :lists, through: :list_movies
  has_many :user_movie_reviews
  has_many :users, through: :user_movie_reviews

  def self.list_movies(list_id)
    List.find(list_id).movies.all
  end
end
