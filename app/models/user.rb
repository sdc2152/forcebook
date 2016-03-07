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
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "Post"

  has_many :comments,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "Comment"


  has_many :photos,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "Photo"

  has_many :requesting_friendships,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "Friendship"

  has_many :receiving_friendships,
    foreign_key: :friend_id,
    primary_key: :id,
    class_name: "Friendship"



  def friends
    requesting_friendships = self.requesting_friendships.includes(receiving: :photos).where(confirmed: true).to_a
    receiving_friendships = self.receiving_friendships.includes(giving: :photos).where(confirmed: true).to_a
    all_friendships = requesting_friendships + receiving_friendships
    all_friends = all_friendships.map do |friendship|
      friendship.user_id == self.id ? friendship.receiving : friendship.giving
    end
    all_friends
  end

  def name
    self.first_name + ' ' + self.last_name
  end


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

  def self.search(query)
    where("username like ?", "%#{query}%")
  end


  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
