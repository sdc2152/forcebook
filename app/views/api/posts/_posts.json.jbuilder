json.extract! post, :id, :body, :author_id, :created_at

json.user  do
  json.merge! post.author.attributes
  json.full_name post.author.first_name + " " + post.author.last_name
end


json.comments post.comments do |comment|
  json.extract! comment, :id, :body, :reply_id
end
