class CreateRiddles < ActiveRecord::Migration[6.1]
  def change
    create_table :riddles do |t|
      t.integer :task_id
      t.string :riddle
      t.string :answer1
      t.string :answer2
      t.string :answer3
      t.boolean :correct

      t.timestamps
    end
  end
end
