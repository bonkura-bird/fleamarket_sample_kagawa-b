class CreateItemImages < ActiveRecord::Migration[6.0]
  def change
    create_table :item_images do |t|
      t.references :item, null: false, foreign_key: true
      t.string :image, null: false
      t.timestamps
    end
  end
end
