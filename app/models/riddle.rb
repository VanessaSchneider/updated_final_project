class Riddle < ApplicationRecord
belongs_to :task




def set_task
    taskid = self.task_id
    my_task = Task.all.where(id: taskid)
    riddles = Riddle.all.where(task_id: taskid)
    completed = riddles.where(correct: true)
    if completed.length > 1
    my_task.update(task2: 1)
    else return "not completed yet"
  end
end

end
