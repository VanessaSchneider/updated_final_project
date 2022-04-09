class WordSerializer < ActiveModel::Serializer
  attributes :id, :task_id, :word
  has_many :letters
  belongs_to :task

end
