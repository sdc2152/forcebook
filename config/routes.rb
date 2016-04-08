# == Route Map
#
#                    Prefix Verb   URI Pattern                                                    Controller#Action
#                      root GET    /                                                              static_pages#home
#                     users POST   /users(.:format)                                               users#create
#                  new_user GET    /users/new(.:format)                                           users#new
#                      user GET    /users/:id(.:format)                                           users#show
#                   session POST   /session(.:format)                                             sessions#create
#               new_session GET    /session/new(.:format)                                         sessions#new
#                           GET    /session(.:format)                                             sessions#show
#                           DELETE /session(.:format)                                             sessions#destroy
#                      home GET    /home(.:format)                                                sessions#new
#          api_search_index GET    /api/search(.:format)                                          api/search#index {:format=>:json}
#                           POST   /api/search(.:format)                                          api/search#create {:format=>:json}
#                api_search DELETE /api/search/:id(.:format)                                      api/search#destroy {:format=>:json}
#                 api_posts GET    /api/posts(.:format)                                           api/posts#index {:format=>:json}
#                           POST   /api/posts(.:format)                                           api/posts#create {:format=>:json}
#                  api_post DELETE /api/posts/:id(.:format)                                       api/posts#destroy {:format=>:json}
#              api_comments GET    /api/comments(.:format)                                        api/comments#index {:format=>:json}
#                           POST   /api/comments(.:format)                                        api/comments#create {:format=>:json}
#               api_comment DELETE /api/comments/:id(.:format)                                    api/comments#destroy {:format=>:json}
#           api_friendships GET    /api/friendships(.:format)                                     api/friendships#index {:format=>:json}
#                           POST   /api/friendships(.:format)                                     api/friendships#create {:format=>:json}
#            api_friendship GET    /api/friendships/:id(.:format)                                 api/friendships#show {:format=>:json}
#                           PATCH  /api/friendships/:id(.:format)                                 api/friendships#update {:format=>:json}
#                           PUT    /api/friendships/:id(.:format)                                 api/friendships#update {:format=>:json}
#                           DELETE /api/friendships/:id(.:format)                                 api/friendships#destroy {:format=>:json}
#        api_timeline_index GET    /api/timeline(.:format)                                        api/timeline#index {:format=>:json}
#                api_photos GET    /api/photos(.:format)                                          api/photos#index {:format=>:json}
#                           POST   /api/photos(.:format)                                          api/photos#create {:format=>:json}
#                 api_photo GET    /api/photos/:id(.:format)                                      api/photos#show {:format=>:json}
#                           PATCH  /api/photos/:id(.:format)                                      api/photos#update {:format=>:json}
#                           PUT    /api/photos/:id(.:format)                                      api/photos#update {:format=>:json}
#                           DELETE /api/photos/:id(.:format)                                      api/photos#destroy {:format=>:json}
#                 api_likes GET    /api/likes(.:format)                                           api/likes#index {:format=>:json}
#                           POST   /api/likes(.:format)                                           api/likes#create {:format=>:json}
#                  api_like DELETE /api/likes/:id(.:format)                                       api/likes#destroy {:format=>:json}
#           api_user_photos GET    /api/users/:user_id/photos(.:format)                           api/photos#index {:format=>:json}
#            api_user_photo GET    /api/users/:user_id/photos/:id(.:format)                       api/photos#show {:format=>:json}
#            api_user_posts GET    /api/users/:user_id/posts(.:format)                            api/posts#index {:format=>:json}
#  api_user_friend_requests GET    /api/users/:user_id/friend_requests(.:format)                  api/friend_requests#index {:format=>:json}
#   api_user_friend_request PATCH  /api/users/:user_id/friend_requests/:id(.:format)              api/friend_requests#update {:format=>:json}
#                           PUT    /api/users/:user_id/friend_requests/:id(.:format)              api/friend_requests#update {:format=>:json}
#                           DELETE /api/users/:user_id/friend_requests/:id(.:format)              api/friend_requests#destroy {:format=>:json}
# api_user_friendship_posts GET    /api/users/:user_id/friendships/:friendship_id/posts(.:format) api/posts#index {:format=>:json}
#      api_user_friendships GET    /api/users/:user_id/friendships(.:format)                      api/friendships#index {:format=>:json}
#       api_user_friendship GET    /api/users/:user_id/friendships/:id(.:format)                  api/friendships#show {:format=>:json}
#                 api_users GET    /api/users(.:format)                                           api/users#index {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                       api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                       api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                       api/users#update {:format=>:json}
#

Rails.application.routes.draw do

  root to: 'static_pages#home'

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :show, :destroy]

  get 'home', to: 'sessions#new'

  namespace :api, defaults: { format: :json } do
    resources :search,          only: [:index, :create, :destroy]
    resources :friendships,     only: [:update, :index, :create, :show, :destroy]
    resources :timeline,        only: [:index]
    resources :photos,          only: [:index, :create, :show, :update, :destroy]
    resources :posts,           only: [:index, :create, :destroy]
    resources :comments,        only: [:index, :create, :destroy]
    resources :likes,           only: [:index, :create, :destroy]
    resources :comment_likes,   only: [:index, :create, :destroy]
    resources :users,           only: [:index, :show, :update] do
      resources :photos,            only: [:index, :show]
      resources :posts,             only: [:index]
      resources :friend_requests,   only: [:index, :update, :destroy]
      resources :friendships,       only: [:show, :index] do
        resources :posts,             only: [:index]
      end
    end
  end

end
