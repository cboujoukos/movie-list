class ListsMovies < ActiveRecord::Migration[5.1]
  def change
    create_join_table :lists, :movies
  end
end
