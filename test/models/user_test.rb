# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  first_name        :string           not null
#  last_name         :string           not null
#  email             :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  friend_request_id :integer
#  birthday_month    :string           not null
#  birthday_day      :string           not null
#  birthday_year     :string           not null
#  gender            :string(1)        not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  prof_url          :string           default("/pics/default_profile.png"), not null
#  banner_url        :string           default("/pics/default_banner.png"), not null
#  lives             :string
#  education         :string
#  work              :string
#  about             :text
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
