class CreateCommentLikes < ActiveRecord::Migration
  def change
    create_table :comment_likes do |t|
      t.integer :author_id, null: false
      t.integer :post_id, null: false
      t.timestamps null: false
    end
    add_index :comment_likes, :post_id
    add_index :comment_likes, [:post_id, :author_id], unique: true
  end
end
