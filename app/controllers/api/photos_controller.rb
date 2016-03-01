class Api::PhotosController < ApplicationController
  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def index
    @photos = Photo.all
    render :index
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
    @photo.destroy
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:url, :user_id, :photo_type, :public_id)
  end



end
