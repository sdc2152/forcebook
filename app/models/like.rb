# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ActiveRecord::Base
  validates :author_id, :post_id, presence: true
  validates :author_id, uniqueness: { scope: :post_id }

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"

end
