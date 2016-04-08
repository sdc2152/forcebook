# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  target_id  :integer          not null
#

class Post < ActiveRecord::Base
  validates :body, :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"

  has_many :comments,
    class_name: "Comment",
    foreign_key: :post_id,
    primary_key: :id

  belongs_to :target,
    class_name: "User",
    foreign_key: :target_id,
    primary_key: :id

  has_many :likes,
    foreign_key: :post_id,
    primary_key: :id,
    class_name: "Like"

  has_many :likers,
    through: :likes,
    source: :author

    def author_name
      author.name
    end
end
