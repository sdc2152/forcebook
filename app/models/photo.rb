# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  url        :string           not null
#  photo_type :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  public_id  :string           not null
#

class Photo < ActiveRecord::Base
  belongs_to :author,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
end
