class Trivium < ApplicationRecord
    belongs_to :task


    def task_update
        taskid = self.task_id
        my_task = Task.all.where(id: taskid)
        trivia = Trivium.all.where(task_id: taskid)
        completed = Trivium.where(guessed: true)
        if completed.length > 1
        my_task.update(task3: 1)
        else return "not completed yet"
      end
    end
    
end
