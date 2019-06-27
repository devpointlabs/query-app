User.create(
    email: 'test@test.com',
    password: 'password'
  )
  
  99.times do
    User.create(
      name: Faker::Name.name,
      email: Faker::Internet.email,
      nickname: Faker::Creature::Cat.name,
      password: "password",
      image: Faker::Avatar.image("name", '100x400', 'png', 'set4')
    )
  end
  
  puts "100 Users Seeded"
