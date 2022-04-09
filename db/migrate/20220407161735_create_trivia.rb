class CreateTrivia < ActiveRecord::Migration[6.1]
  def change
    create_table :trivia do |t|
      t.integer :task_id
      t.string :question
      t.string :answer1
      t.string :answer2
      t.string :answer3
      t.string :answer4
      t.string :correct
      t.boolean :guessed

      t.timestamps
    end
  end
end
