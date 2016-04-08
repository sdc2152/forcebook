json.array! @timeline do |item|
  json.extract! item, :id, :body, :author_id, :created_at
  json.user item.author
  json.comments(item.comments) do |comment|
    json.extract! comment, :id, :body, :author_id, :created_at, :post_id, :reply_id
    json.user comment.author
 end
 json.likes(item.likes) do |like|
   json.extract! like, :id, :author_id, :post_id
 end

end
