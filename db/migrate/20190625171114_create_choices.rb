class CreateChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :choices do |t|
      t.text :correct_answer
      t.text :answer
      t.belongs_to :question, foreign_key: true

      t.timestamps
    end
  end
end
