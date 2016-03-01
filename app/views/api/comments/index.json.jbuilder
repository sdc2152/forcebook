json.array! @comments.sort_by(&:created_at).reverse do |comment|
  json.partial! "api/comments/comments", comment: comment
end
