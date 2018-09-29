class CreateUserMovieReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :user_movie_reviews do |t|
      t.references :user, foreign_key: true
      t.references :movie, foreign_key: true
      t.integer :review
    end
  end
end
