class AddSubmissionToChoices < ActiveRecord::Migration[5.2]
  def change
    add_reference :choices, :submission, foreign_key: true
  end
end
