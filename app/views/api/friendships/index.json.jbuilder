json.array! @friends do |friend|
  json.partial! "api/friendships/friends", friend: friend
end
