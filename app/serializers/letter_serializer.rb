class LetterSerializer < ActiveModel::Serializer
  attributes :id, :word_id, :letter, :letter2
  belongs_to :word
end
