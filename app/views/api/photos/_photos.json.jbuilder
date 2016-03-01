
json.set! photo.photo_type.to_sym do
  json.extract! photo, :id, :user_id, :url
end

json.user do
  json.extract! photo.author, :id, :first_name, :last_name, :email
end
