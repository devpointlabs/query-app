class AddColumnWrongAnswersToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :wrong_answers, :string
  end
end
