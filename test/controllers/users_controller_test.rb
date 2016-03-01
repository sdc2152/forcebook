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
#

require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end
