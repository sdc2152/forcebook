# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# 100.times do |num|
#   Post.create!({author_id: 1, body: Faker::Hacker.say_something_smart})
# end
me = User.new(
  {first_name: "Spencer",
  last_name: "Christensen",
  email: "spencer.christensen88888@gmail.com",
  password: "sdc12345",
  friend_request_id: nil,
  birthday_month: 9,
  birthday_day: 1,
  birthday_year: 1989,
  gender: "M"}
)

me.save!
