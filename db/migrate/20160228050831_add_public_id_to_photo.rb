class AddPublicIdToPhoto < ActiveRecord::Migration
  def change
    add_column :photos, :public_id, :string, null: false
  end
end
