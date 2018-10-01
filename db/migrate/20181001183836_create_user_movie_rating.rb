class CreateUserMovieRating < ActiveRecord::Migration[5.1]
  def change
    create_table :user_movie_ratings, {:id => false} do |t|
      t.integer :user_id
      t.integer :movie_id
      t.integer :rating
      t.timestamps
    end
  end
end
