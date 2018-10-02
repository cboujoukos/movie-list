class List < ApplicationRecord
  belongs_to :user
  has_many :list_movies
  has_many :movies, through: :list_movies

  def avg_rating(user)
    movie_ids = self.movies.map(&:id) # can be better query

    avg = UserMovieRating.where(movie_id: movie_ids, user_id: user.id).average(:rating)

    return avg.to_f

  end

  # def as_json(options={})
  #   super(:include => [:movies], )
  # end
end
