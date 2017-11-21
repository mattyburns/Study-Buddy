class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.belongs_to :user
      t.string :front_content, null: false
      t.string :back_content, null: false

      t.timestamps null: false
    end
  end
end
