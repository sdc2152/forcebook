class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:posts, :comments, :photos).where(id: params[:id]).to_a.first
    render :show
  end

  def index
    @users = User.all.includes(:posts, :comments, :photos)
    render :index
  end

  def update
    @user = User.where(id: params[:userId]).to_a.first

    if @user.update(work: params[:work], education: params[:education], lives: params[:lives], about: params[:about])
      render json: @user
    else
      render json: {}, status: 420
    end
  end
end
