class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :name
      t.string :boolean_q
      t.string :multiple_q
      t.string :open_q
      t.belongs_to :quiz, foreign_key: true
      t.has_many :choices

      t.timestamps
    end
  end
end
