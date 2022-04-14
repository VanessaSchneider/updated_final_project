class Word < ApplicationRecord
has_many :letters
belongs_to :task




def task_update
    task = self.task
    letters = self.letters
    completed = letters.where.not(letter2: nil)
    if completed.length > 5
    task.update(task4: 1)
    else return "not completed yet"
  end
end



end
