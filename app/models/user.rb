# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  first_name        :string           not null
#  last_name         :string           not null
#  email             :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  friend_request_id :integer
#  birthday_month    :string           not null
#  birthday_day      :string           not null
#  birthday_year     :string           not null
#  gender            :string(1)        not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validates(
    :first_name,
    :last_name,
    :email,
    :password_digest,
    :session_token,
    :gender,
    :birthday_month,
    :birthday_day,
    :birthday_year,
    presence: true
  )

  validates :gender, inclusion: %w(M F), if: -> { gender }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, :email, uniqueness: true

  has_many :posts,
    class_name: "Post",
    foreign_key: :author_id,
    primary_key: :id

  has_many :comments,
    class_name: "Comment",
    foreign_key: :author_id,
    primary_key: :id


  has_many :photos,
    class_name: "Photo",
    foreign_key: :user_id,
    primary_key: :id

  def self.find_by_credentials(params)
    user = User.find_by(email: params[:email])
    user.try(:is_password?, params[:password]) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def photo_object

  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
