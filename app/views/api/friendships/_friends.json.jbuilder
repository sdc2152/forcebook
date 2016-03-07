json.extract!(friend, :id, :first_name, :last_name,
                      :email, :password_digest,
                      :session_token, :friend_request_id,
                      :birthday_month, :birthday_day,
                      :birthday_year, :gender, :prof_url, :banner_url)

name = friend.first_name + ' ' + friend.last_name

json.name name
