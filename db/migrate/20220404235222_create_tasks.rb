class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.integer :task1
      t.integer :task2
      t.integer :task3
      t.integer :task4
      t.integer :task5
      

      t.timestamps
    end
  end
end
