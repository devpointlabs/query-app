class Submission < ApplicationRecord
  belongs_to :user
  belongs_to :quiz
  has_many :choices


  def self.show_grades(quiz_id)
      find_by_sql(["
      select
        questions.name,
        correct_answer,
        
        answer,
        correct,
        comment, 

        choices.id as choice_id, 
        users.name as user_name,
        questions.id as question_id,
        submissions.id as submission_id
      from choices
      left join questions 
      on choices.question_id = questions.id 
      left join submissions
      on submissions.id = choices.submission_id
      left join users 
      on submissions.user_id = users.id
      where questions.quiz_id = ? 
      
      ", quiz_id])    
  end

  def self.id_catcher()
      find_by_sql(["
        select choices.id as choice_id, question_id, submission_id, user_id, quiz_id
        from choices 
        left join submissions
        on submissions.id = choices.submission_id
        "])

  end 
  



end
