class Movie < ApplicationRecord
  has_and_belongs_to_many :lists, join_table: "lists_movies"

  def self.list_movies(list_id)
    List.find(list_id).movies.all
  end
end
