# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.new
user1.email = 'user1@aol.com'
user1.password = 'password'
user1.password_confirmation = 'password'
user1.save

user2 = User.new
user2.email = 'user2@aol.com'
user2.password = 'password'
user2.password_confirmation = 'password'
user2.save
