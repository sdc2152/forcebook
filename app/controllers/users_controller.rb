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

class UsersController < ApplicationController
  before_action :require_signed_in!, only: [:show]
  before_action :require_signed_out!, only: [:new, :create]

  def create
    @user = User.new(user_params)

    if @user.save!
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render new_session_url
    end
  end


  private
  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :birthday,
      :email,
      :password,
      :gender,
      :birthday_month,
      :birthday_year,
      :birthday_day
      )
  end


end
