class TaskSerializer < ActiveModel::Serializer
  attributes :id, :task1, :task2, :task3, :task4, :task5
has_many :riddles
has_many :words
belongs_to :user
has_many :letters
has_many :trivia
has_many :rocks

end
