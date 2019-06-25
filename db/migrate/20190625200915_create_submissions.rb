class CreateSubmissions < ActiveRecord::Migration[5.2]
  def change
    create_table :submissions do |t|
      t.text :field
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
