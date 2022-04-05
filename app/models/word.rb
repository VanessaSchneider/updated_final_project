class Word < ApplicationRecord
has_many :letters
belongs_to :task
end
