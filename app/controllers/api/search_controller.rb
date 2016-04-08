class Api::SearchController < ApplicationController
    def index
      @users = User.where("(UPPER(first_name) LIKE UPPER(?)) OR (UPPER(last_name) LIKE UPPER(?))", params[:searchTerms], params[:searchTerms])

      render json: @users
    end
end
