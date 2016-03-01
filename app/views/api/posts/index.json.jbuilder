json.array! @posts.sort_by(&:created_at).reverse do |post|
  json.partial! "api/posts/posts", post: post
end
