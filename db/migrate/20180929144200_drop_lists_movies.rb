class DropListsMovies < ActiveRecord::Migration[5.1]
  def change
    drop_table :lists_movies
  end
end
