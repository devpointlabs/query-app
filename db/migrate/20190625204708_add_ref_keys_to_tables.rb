class AddRefKeysToTables < ActiveRecord::Migration[5.2]
  def change
    add_reference :questions, :quizzes, foreign_key: true
    add_reference :choices, :questions, foreign_key: true
    add_reference :submissions, :quizzes, foreign_key: true
    add_reference :submission_choices, :submissions, foreign_key: true
    add_reference :submission_choices, :choices, foreign_key: true

  end
end
