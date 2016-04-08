class Api::LikesController < ApplicationController

  def create
    @like = Like.new(post_id: params[:postId])
    @post = Post.find(params[:postId])

    @like.author_id = current_user.id

    if @like.save
      render json: {like: @like}
    else
      render json: {}, status: 420
    end
  end

  def destroy
    @like = Like.find(params[:id])
    if @like.destroy
      render json: {like: @like}
    else
      render json: {}, status: 420
    end
  end
end
