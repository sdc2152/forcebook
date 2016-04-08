class AddUserAboutInfo < ActiveRecord::Migration
  def change
    add_column :users, :lives, :string
    add_column :users, :education, :string
    add_column :users, :work, :string
    add_column :users, :about, :text
  end
end
