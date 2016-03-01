class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(session_params)
    if user
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = "The password or email you entered is incorrect"
      render new_session_url
    end
  end

  def destroy
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end

end
