# json.array! @requests do |request|
#   # json.extract! request, :id, :first_name, :last_name,
#   #                       :email, :password_digest,
#   #                       :session_token, :friend_request_id,
#   #                       :birthday_month, :birthday_day,
#   #                       :birthday_year, :gender, :prof_url, :banner_url
#   #
#   # name = request.first_name + ' ' + request.last_name
#   #
#   # json.name name
# end

json.array! @req do |request|
  json.user request
end
