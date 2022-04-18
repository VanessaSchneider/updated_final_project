class RockSerializer < ActiveModel::Serializer
  attributes :id, :task_id, :win
  belongs_to :task

end
