class WordSerializer < ActiveModel::Serializer
  attributes :id, :word_id, :letter
  has_many :letters
belongs_to :task
end
