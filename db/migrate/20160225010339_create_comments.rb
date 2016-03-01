class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :post_id, null: false
      t.integer :reply_id
      t.text :body, null: false

      t.timestamps null: false
    end
  end
end
