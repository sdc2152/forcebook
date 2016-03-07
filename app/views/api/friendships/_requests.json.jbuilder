json.extract!(request, :id, :first_name, :last_name,
                      :email, :password_digest,
                      :session_token, :friend_request_id,
                      :birthday_month, :birthday_day,
                      :birthday_year, :gender)

photo_hash = {
  profile_pic: {
    id: 1,
    user_id: 1,
    url: "/pics/default_profile.png",
    photo_type: "profile_pic",
    created_at: "2016-02-29T18:47:08.689Z",
    updated_at: "2016-02-29T18:47:08.689Z",
    public_id: "pk8xzpqgmydd68bevnyq"
  },
  banner_pic: {
    id: 1,
    user_id: 1,
    url: "/pics/default_banner.png",
    photo_type: "banner_pic",
    created_at: "2016-02-29T18:47:08.689Z",
    updated_at: "2016-02-29T18:47:08.689Z",
    public_id: "pk8xzpqgmydd68bevnyq"
  }
}


request.photos.each do |photo|
  photo_hash[photo.photo_type.to_sym] = photo
end

json.photos photo_hash
