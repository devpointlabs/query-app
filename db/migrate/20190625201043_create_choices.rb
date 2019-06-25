class CreateChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :choices do |t|
      t.string :answer
      t.string :correct_answer

      t.timestamps
    end
  end
end
