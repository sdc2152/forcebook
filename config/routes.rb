# == Route Map
#
#                 Prefix Verb   URI Pattern                                           Controller#Action
#                   root GET    /                                                     static_pages#home
#                  users POST   /users(.:format)                                      users#create
#                   user GET    /users/:id(.:format)                                  users#show
#                session POST   /session(.:format)                                    sessions#create
#            new_session GET    /session/new(.:format)                                sessions#new
#                        GET    /session(.:format)                                    sessions#show
#              api_posts GET    /api/posts(.:format)                                  api/posts#index {:format=>:json}
#                        POST   /api/posts(.:format)                                  api/posts#create {:format=>:json}
#               api_post DELETE /api/posts/:id(.:format)                              api/posts#destroy {:format=>:json}
#           api_comments GET    /api/comments(.:format)                               api/comments#index {:format=>:json}
#                        POST   /api/comments(.:format)                               api/comments#create {:format=>:json}
#            api_comment DELETE /api/comments/:id(.:format)                           api/comments#destroy {:format=>:json}
#        api_friendships POST   /api/friendships(.:format)                            api/friendships#create {:format=>:json}
#         api_friendship GET    /api/friendships/:id(.:format)                        api/friendships#show {:format=>:json}
#                        DELETE /api/friendships/:id(.:format)                        api/friendships#destroy {:format=>:json}
#    api_friend_requests POST   /api/friend_requests(.:format)                        api/friend_requests#create {:format=>:json}
#     api_friend_request GET    /api/friend_requests/:id(.:format)                    api/friend_requests#show {:format=>:json}
#                        PATCH  /api/friend_requests/:id(.:format)                    api/friend_requests#update {:format=>:json}
#                        PUT    /api/friend_requests/:id(.:format)                    api/friend_requests#update {:format=>:json}
#                        DELETE /api/friend_requests/:id(.:format)                    api/friend_requests#destroy {:format=>:json}
# api_user_post_comments GET    /api/users/:user_id/posts/:post_id/comments(.:format) api/comments#index {:format=>:json}
#         api_user_posts GET    /api/users/:user_id/posts(.:format)                   api/posts#index {:format=>:json}
#    api_user_friendship GET    /api/users/:user_id/friendships/:id(.:format)         api/friendships#show {:format=>:json}
#              api_users GET    /api/users(.:format)                                  api/users#index {:format=>:json}
#               api_user GET    /api/users/:id(.:format)                              api/users#show {:format=>:json}
#                        PATCH  /api/users/:id(.:format)                              api/users#update {:format=>:json}
#                        PUT    /api/users/:id(.:format)                              api/users#update {:format=>:json}
#

Rails.application.routes.draw do

  root to: 'static_pages#home'

  resources :users, only: [:create, :show]
  resource :session, only: [:new, :create, :show]

  namespace :api, defaults: { format: :json } do
    resources :posts,           only: [:index, :create, :destroy]
    resources :comments,        only: [:index, :create, :destroy]
    resources :friendships,     only: [:create, :show, :destroy]
    resources :friend_requests, only: [:create, :show, :update, :destroy]
    resources :photos,          only: [:index, :create, :show, :update, :destroy]
    resources :users,           only: [:index, :show, :update] do
      resources :photos,           only: [:index, :show]
      resources :posts,           only: [:index]
      resources :friendships,     only: [:show, :index] do
        resources :posts,         only: [:index]
      end
    end

  end

end
