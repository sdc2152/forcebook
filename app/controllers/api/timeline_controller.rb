class Api::TimelineController < ApplicationController

  def index
    @friend_ids = current_user.friends.map {|friend| friend.id }
    @timeline_ids = @friend_ids.push(current_user.id)
    @target_posts = Post.includes(:likes, :author, comments: :author).where(author_id: @timeline_ids)
    @timeline = @target_posts.sort { |y,x| x.created_at <=> y.created_at  }
  end
end
