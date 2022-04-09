class Task < ApplicationRecord
    belongs_to :user
    has_many :riddles
    has_many :words
    has_many :letters, through: :words
    has_many :trivia
end
