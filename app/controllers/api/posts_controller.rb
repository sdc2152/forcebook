class Api::PostsController < ApplicationController

  def index
    @posts = Post.all

    if params[:user_id]
      @posts = Post.includes({author: :photos}, :comments).where(author_id: params[:user_id]).order(created_at: :desc)
    end
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save!
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:body, :author_id, :target_id)
  end


end
