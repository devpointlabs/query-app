class AddCommentToChoices < ActiveRecord::Migration[5.2]
  def change

    add_column :choices, :comment, :text
  end
end
