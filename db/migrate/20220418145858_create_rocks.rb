class CreateRocks < ActiveRecord::Migration[6.1]
  def change
    create_table :rocks do |t|
      t.integer :task_id
      t.boolean :win
      t.timestamps
    end
  end
end
