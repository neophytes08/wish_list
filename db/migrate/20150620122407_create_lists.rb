class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :list_name
      t.text :list_description

      t.timestamps null: false
    end
  end
end
