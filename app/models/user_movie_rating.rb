class UserMovieRating < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  # self.primary_key = :user_id, :movie_id
end
