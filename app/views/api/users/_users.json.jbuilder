json.extract!(user, :id, :first_name, :last_name,
                      :email, :password_digest,
                      :session_token, :friend_request_id,
                      :birthday_month, :birthday_day,
                      :birthday_year, :gender, :prof_url, :banner_url,
                      :work, :education, :about, :lives
                      )

json.posts user.posts do |post|
  json.extract! post, :id, :body
end

json.full_name "#{user.first_name} #{user.last_name}"

json.friend user.friends
