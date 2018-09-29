class List < ApplicationRecord
  belongs_to :user
  # has_and_belongs_to_many :movies, join_table: "lists_movies"
  has_many :list_movies
  has_many :movies, through: :list_movies
end
