class User < ApplicationRecord
    has_secure_password
    has_one :task
    has_many :riddles, through: :task
    has_many :words, through: :task
    has_many :letters, through: :words
    has_many :trivia, through: :task



    validates :username, presence: true, uniqueness: true


  def make_data
    
          task = Task.create(user_id: self.id, task1:nil, task2: nil, task3: nil, task4: nil)
          riddle1 = Riddle.create(task_id: task.id, riddle: "What has eyes but cannot see?", answer1: "potato", answer2: "a potato", answer3: "tater", correct: false)
          riddle2 = Riddle.create(task_id: task.id, riddle: "What has hands but cannot clap?", answer1: "clock", answer2: "a clock", answer3: "t rex", correct: false)
          riddle3 =Riddle.create(task_id: task.id, riddle: "I have many teeth but cannot bite.", answer1: "comb", answer2: "a comb", answer3: "combs", correct: false)
          riddle4 =Riddle.create(task_id: task.id, riddle: "The more of me there is, the less you can see.?", answer1: "dark", answer2: "the dark", answer3: "darkness", correct: false)
          w1 = Word.create(task_id: task.id, word: "PRINGLE")
          w2 = Word.create(task_id: task.id, word: "OLGA")
          l1 = Letter.create(word_id: w1.id, letter:"P", letter2:nil)
          l2 = Letter.create(word_id: w1.id, letter:"R", letter2:nil) 
          l3 = Letter.create(word_id: w1.id, letter: "I", letter2:nil)
          l4 = Letter.create(word_id: w1.id, letter: "N", letter2:nil)
          l5 = Letter.create(word_id: w1.id, letter: "G", letter2:nil)
          l6 = Letter.create(word_id: w1.id, letter: "L", letter2:nil)
          l7 = Letter.create(word_id: w1.id, letter: "E", letter2:nil)
          l9 = Letter.create(word_id: w2.id, letter: "O", letter2:nil)
          l10 = Letter.create(word_id: w2.id, letter: "L", letter2:nil)
          l11 = Letter.create(word_id: w2.id, letter: "G", letter2:nil)
          l12 = Letter.create(word_id: w2.id, letter: "A", letter2:nil)
          trivia1 = Trivium.create(task_id: task.id, question: "In the Disney film 'Sleeping Beauty', the witch,Maleficent, transforms into what animal?", answer1: "Crow", answer2: "Raven", answer3: "Cat", answer4: "Dragon", correct: "D", guessed: false)
          trivia2 = Trivium.create(task_id: task.id, question: "In which Shakespeare play did three witches say, 'Double, double toil and trouble?'", answer1: "King Lear", answer2: "Hamlet", answer3: "Macbeth", answer4: "Othello", correct: "C", guessed: false)
          trivia3 = Trivium.create(task_id: task.id, question: "What are the names of the three witches in 'Hocus Pocus?'", answer1: "Martha, Mary, Beth", answer2: "Sarah, Martha, Emily", answer3: "Sarah, Mary, Winnie", answer4: "Emily, Mary, Sarah", correct: "C", guessed: false)
          trivia4 = Trivium.create(task_id: task.id, question: "Which witch was killed when Dorothy's house landed on it?", answer1: "Wicked witch of the West", answer2: "Wicked witch of the East", answer3: "Witchella", answer4: "Glinda", correct: "B", guessed: false)
          trivia5 = Trivium.create(task_id: task.id, question: "In which U.S. state did the witch trials take place between 1692 and 1693?", answer1: "Virginia", answer2: "Massachusetts", answer3: "Connecticut", answer4: "Penssylvania", correct: "B", guessed: false)

  end

  
end


