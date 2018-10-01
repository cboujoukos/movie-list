class Movie < ApplicationRecord
  has_many :list_movies
  has_many :lists, through: :list_movies
  has_many :user_movie_ratings
  has_many :users, through: :user_movie_ratings

  def self.list_movies(list_id)
    List.find(list_id).movies.all
  end

  def self.find_or_create_rating(movie)
  end
end
