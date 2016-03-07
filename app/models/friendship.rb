# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  friend_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  denied     :boolean          default(FALSE), not null
#  confirmed  :boolean          default(FALSE), not null
#

class Friendship < ActiveRecord::Base

  belongs_to :giving,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "User"

  belongs_to :receiving,
    foreign_key: :friend_id,
    primary_key: :id,
    class_name: "User"

end
