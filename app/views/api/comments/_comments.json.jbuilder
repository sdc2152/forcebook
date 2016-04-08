json.extract! comment, :id, :body, :author_id, :created_at, :post_id, :reply_id

json.user do
  json.extract! comment.author, :prof_url, :banner_url, :id, :first_name, :last_name, :email, :birthday_month, :birthday_day, :birthday_year, :gender, :photos
end

json.replies comment.replies do |reply|
  json.extract! reply, :id, :body, :author_id, :created_at, :post_id, :reply_id
end
