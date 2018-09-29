class CreateListMoviesTable < ActiveRecord::Migration[5.1]
  def change
    create_table :list_movies_tables do |t|
      t.references :list, foreign_key: true
      t.references :movie, foreign_key: true
    end
  end
end
