class TaskSerializer < ActiveModel::Serializer
  attributes :id
has_many :riddles
has_many :words
belongs_to :user

end
