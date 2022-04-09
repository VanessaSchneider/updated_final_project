class LetterSerializer < ActiveModel::Serializer
  attributes :id, :word_id, :letter
  belongs_to :word
end
