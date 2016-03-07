# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  post_id    :integer          not null
#  reply_id   :integer
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :body, :author_id, :post_id, presence: true

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :post,
    class_name: "Post",
    foreign_key: :post_id,
    primary_key: :id

  has_many :replies,
    class_name: "Comment",
    foreign_key: :reply_id,
    primary_key: :id



end
