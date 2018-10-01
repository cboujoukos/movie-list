  class User < ApplicationRecord
    has_many :lists
    has_many :user_movie_reviews
    has_many :reviews, through: :user_movie_reviews
  end

  class Movie < ApplicationRecord
    has_many :list_movies
    has_many :lists, through: :list_movies
    has_many :user_movie_reviews
    has_many :users, through: :user_movie_reviews
  end

  class ListMovie < ApplicationRecord
    belongs_to :list
    belongs_to :movie
  end

  class UserMovieReview < ApplicationRecord
    belongs_to :user
    belongs_to :movie

    // has a user_id column, movie_id column, and review column
  end

  class List < ApplicationRecord
    belongs_to :user
    has_many :list_movies
    has_many :movies, through: :list_movies

    // I need to write a method that can pull out and average the user's rating for all movies in a list.

    def avg_rating
      movie_ids = self.movies.map(&:id) # can be better query

      self.movies.map do |movie|
        movie.id
      end

      

      MUR.where(movieId: movie_ids, user_id: user.id)

    end

    SELECT movie_id FROM listmovies where list_id = {self.id}
    Select * From movieuserreviews where movie_id IN {result} & userid = current userId
  end
