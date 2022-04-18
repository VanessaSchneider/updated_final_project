class Rock < ApplicationRecord
    belongs_to :task
    

    def task_update
        taskid = self.task_id
        my_task = Task.all.where(id: taskid)
        rocks = Rock.all.where(task_id: taskid)
        if rocks.length > 4
        my_task.update(task5: 1)
        else return "not completed yet"
      end
    end
end
