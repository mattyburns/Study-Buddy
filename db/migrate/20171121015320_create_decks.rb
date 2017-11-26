class CreateDecks < ActiveRecord::Migration[5.1]
  def change
    create_table :decks do |t|
      t.belongs_to :user
      t.string :name, null: false
      t.string :description

      t.timestamps null: false
    end
  end
end
