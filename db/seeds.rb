# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(
  email: 'test@test.com',
  password: 'password'
)

99.times do
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    role: "student",
    password: "password",
    image: Faker::Avatar.image("name", '100x400', 'png', 'set4')
  )
end

puts "100 Users Seeded"
