class Api::PhotosController < ApplicationController
  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def index
    @photos = Photo.includes(:author).where(user_id: params[:user_id]).order(created_at: :desc)
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save!
      render :show
    else
      render json: @photo.errors.full_messages
    end
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    if @photo.destroy
      render json: {
        photo: @photo
      }
    else
      render json: {}, status: 420
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:url, :user_id, :photo_type, :public_id)
  end



end
