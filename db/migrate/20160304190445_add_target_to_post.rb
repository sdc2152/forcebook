class AddTargetToPost < ActiveRecord::Migration
  def change
    add_column :posts, :target_id, :integer, null: false
  end
end
