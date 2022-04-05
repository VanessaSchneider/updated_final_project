class User < ApplicationRecord
    has_secure_password
    has_one :task
    has_many :riddles, through: :task
    has_many :words, through: :task


  def make_data
    
          task = Task.create(user_id: self.id)
          riddle1 = Riddle.create(task_id: task.id, riddle: "What has eyes but cannot see?", answer1: "potato", answer2: "a potato", answer3: "tater", correct: false)
          riddle2 = Riddle.create(task_id: task.id, riddle: "What has hands but cannot clap?", answer1: "clock", answer2: "a clock", answer3: "t rex", correct: false)
          riddle3 =Riddle.create(task_id: task.id, riddle: "I have many teeth but cannot bite.", answer1: "comb", answer2: "a comb", answer3: "combs", correct: false)
          riddle4 =Riddle.create(task_id: task.id, riddle: "The more of me there is, the less you can see.?", answer1: "dark", answer2: "the dark", answer3: "darkness", correct: false)
          w1 = Word.create(task_id: task.id, word: "MEATLOAF" )
          w2 = Word.create(task_id: task.id, word: "OLGA")
          l1 = Letter.create(word_id:w1.id, letter:"M")
          l2 = Letter.create(word_id:w1.id, letter:"E")
         l3 = Letter.create(word_id:w1.id, letter:"A")
        l4 = Letter.create(word_id:w1.id, letter:"T")
        l5 = Letter.create(word_id:w1.id,letter:"L")
        l6= Letter.create(word_id:w1.id, letter:"O")
        l7= Letter.create(word_id:w1.id, letter:"A")
        l8= Letter.create(word_id:w1.id, letter:"F")
        l9 = Letter.create(word_id:w2.id, letter:"O")
        l10 = Letter.create(word_id:w2.id, letter:"L")
        l11 = Letter.create(word_id:w2.id, letter:"G")
        l12 = Letter.create(word_id:w2.id, letter:"A")
  end

  
end


