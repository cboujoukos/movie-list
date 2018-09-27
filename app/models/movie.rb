class Movie < ApplicationRecord
  has_and_belongs_to_many :lists, join_table: "lists_movies"
end
