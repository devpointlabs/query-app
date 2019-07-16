User.create(
  name: "bob",
  email: "test@test.com",
  role: "teacher",
  password: "password",
  image: nil

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
  
  10.times do 
    Quiz.create(
        name: Faker::Educator.subject,
        )
        5.times do 
            Question.create(
                name: Faker::Science.scientist,
                correct_answer: "the coolest person",
                quiz_id: rand(1..10)
                )
                
            end
            10.times do 
              Choice.create( 
                answer: "this is the students answer",
                correct: true,
                question_id: rand(1..10)
                submission_id: rand(1..5)
                )
              end

              5.times do
                Choice.create( 
                  answer: "not cool at all",
                  correct: false,
                  question_id: rand(1..5),
                  submission_id: rand(1..5)
                  )
                end
            end


puts "100 Users Seeded 10 quizzes 20 questions 20 answers"
