class StaticPagesController < ApplicationController
  def root
  end

  def home
    @user = User.new
  end
end
