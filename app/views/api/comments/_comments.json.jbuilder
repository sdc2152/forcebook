json.extract! comment, :id, :body, :author_id, :created_at, :post_id, :reply_id

json.user do
  json.extract! comment.author, :id, :first_name, :last_name, :email, :birthday_month, :birthday_day, :birthday_year, :gender, :photos
end

json.post  do
  json.extract! comment.post,  :id, :body
end

json.replies comment.replies do |reply|
  json.extract! reply, :id, :body, :author_id, :created_at, :post_id, :reply_id
end
