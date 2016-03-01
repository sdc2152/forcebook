@photos.sort_by(&:created_at).reverse.each do |photo|
  json.partial! "api/photos/photos", photo: photo
end
