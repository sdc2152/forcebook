class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:posts, :comments, :photos).where(id: params[:id]).to_a.first
    render :show
  end

  def index
    @users = User.all
    render :index
  end
end
