class AddColumnCorrectAnswerToQuestionTable < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :correct_answer, :text
  end
end
