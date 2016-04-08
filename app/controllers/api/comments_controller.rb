class Api::CommentsController < ApplicationController

  def index
    if params[:user_id]
      @comments = Comment.includes(:author, :post, :replies, :likers).where(author_id: params[:user_id]).order(created_at: :desc)
    else
      @comments = Comment.includes(:author, :post, :replies).all
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id

    if @comment.save!
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end

end
