class RemoveTimestampsFromUserMovieRatings < ActiveRecord::Migration[5.1]
  def change
    remove_column :user_movie_ratings, :created_at, :string
    remove_column :user_movie_ratings, :updated_at, :string
  end
end
