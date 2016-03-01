class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.string :url, null: false
      t.string :photo_type, null: false

      t.timestamps null: false
    end
  end
end
