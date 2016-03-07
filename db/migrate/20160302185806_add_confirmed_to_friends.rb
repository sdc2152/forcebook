class AddConfirmedToFriends < ActiveRecord::Migration
  def change
    add_column :friendships, :denied, :boolean, default: false, null: false
    add_column :friendships, :confirmed, :boolean, default: false, null: false
  end
end
