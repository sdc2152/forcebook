class CreateFriendRequests < ActiveRecord::Migration
  def change
    create_table :friend_requests do |t|
      t.integer :friend_id, null: false
      t.integer :user_id, null: false
      t.boolean :denied, default: false, null: false
      t.timestamps null: false
    end
    add_index :friend_requests, [:friend_id, :user_id], unique: true, using: :btree
    add_index :friend_requests, [:user_id, :friend_id], unique: true, using: :btree
  end
end
