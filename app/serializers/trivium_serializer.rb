class TriviumSerializer < ActiveModel::Serializer
  attributes :id, :task_id, :question, :answer1, :answer2, :answer3, :answer4, :correct, :guessed
  belongs_to :task
end

