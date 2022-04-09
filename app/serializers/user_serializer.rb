class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_one :task
  has_many :riddles
  has_many :words
  has_many :letters
  has_many :trivia

end


