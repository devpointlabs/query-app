class AddColumnMultipleChoiceToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :answerA, :text
    add_column :questions, :answerB, :text
    add_column :questions, :answerC, :text
    add_column :questions, :answerD, :text
  end
end
