class CreateDeckAssociation < ActiveRecord::Migration[5.1]
  def change
    create_table :deck_associations do |t|
      t.integer :card_id
      t.integer :deck_id

      t.timestamps null: false
    end
  end
end
