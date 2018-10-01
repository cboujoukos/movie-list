class AddPrimaryKeyToUserMovieRatings < ActiveRecord::Migration[5.1]
  def change
    add_column :user_movie_ratings, :id, :primary_key
  end
end
