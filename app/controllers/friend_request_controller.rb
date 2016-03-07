class FriendRequestController < ApplicationController

  def index
    @requests = FriendRequest.find(user_id: params[:id])
    render :index
  end

  def create
    @request =FriendRequest.new(request_params)
    @request.user_id = current_user.id

  end


  private


  def friend_params
    params.require(:request).permit(:friend_id, :denied)
  end
end
