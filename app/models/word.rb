class Word < ApplicationRecord
has_many :letters
belongs_to :task




def task_update
    taskid = self.task_id
    my_task = Task.all.where(id: taskid)
    letters = Letter.all.where(word_id: self.id)
    completed = letters.where.not(letter2: nil)
    if completed.length = 7
    my_task.update(task4: 1)
    else return "not completed yet"
  end
end



end
