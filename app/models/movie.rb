class Movie < ApplicationRecord
  has_many :list_movies
  has_many :lists, through: :list_movies
  has_many :user_movie_ratings
  has_many :users, through: :user_movie_ratings
  # has_many :movie_ratings, -> {where(user_id: current_user.id)}, source: :user_movie_ratings

  # def self.current
  #   Thread.current[:user]
  # end
  # def self.current=(user)
  #   Thread.current[:user] = user
  # end

  def self.list_movies(list_id)
    List.find(list_id).movies.all
  end

  def user_review(user_id)
    UserMovieRating.where(user_id: user_id, movie_id: self.id)
  end

end
