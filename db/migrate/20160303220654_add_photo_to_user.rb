class AddPhotoToUser < ActiveRecord::Migration
  def change
    add_column :users, :prof_url, :string, null: false, default: "/pics/default_profile.png"
    add_column :users, :banner_url, :string, null: false, default: "/pics/default_banner.png"
  end
end
