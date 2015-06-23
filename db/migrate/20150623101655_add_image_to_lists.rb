class AddImageToLists < ActiveRecord::Migration
  def self.up
    add_column :lists, :image, :binary, :limit => 20.megabyte
  end

  def self.down
    remove_column :lists, :image
  end
end
