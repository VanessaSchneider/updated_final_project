class RiddleSerializer < ActiveModel::Serializer
  attributes :id, :task_id, :riddle, :answer1, :answer2, :answer3, :correct

end
