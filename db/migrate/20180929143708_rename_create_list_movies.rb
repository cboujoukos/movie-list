class RenameCreateListMovies < ActiveRecord::Migration[5.1]
  def change
    rename_table :list_movies_tables, :list_movies
  end
end
