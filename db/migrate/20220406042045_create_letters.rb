class CreateLetters < ActiveRecord::Migration[6.1]
  def change
    create_table :letters do |t|
      t.integer :word_id
      t.string :letter

      t.timestamps
    end
  end
end


