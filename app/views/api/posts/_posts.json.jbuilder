json.extract! post, :id, :body, :author_id, :created_at


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


post.author.photos.each do |photo|
  photo_hash[photo.photo_type.to_sym] = photo
end

json.user  do
  json.merge! post.author.attributes
  json.photos photo_hash
  json.full_name post.author.first_name + " " + post.author.last_name
end


json.comments post.comments do |comment|
  json.extract! comment, :id, :body, :reply_id
end
