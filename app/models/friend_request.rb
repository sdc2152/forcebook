# == Schema Information
#
# Table name: friend_requests
#
#  id         :integer          not null, primary key
#  friend_id  :integer          not null
#  user_id    :integer          not null
#  denied     :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FriendRequest < ActiveRecord::Base
end
