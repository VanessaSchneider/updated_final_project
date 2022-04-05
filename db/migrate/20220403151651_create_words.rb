class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.integer :task_id
      t.string :word

      t.timestamps
    end
  end
end
