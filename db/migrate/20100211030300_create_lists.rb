class CreateLists < ActiveRecord::Migration
  def self.up
    create_table :lists do |t|
      t.string :description
      t.string :title
      t.timestamps
    end
  end

  def self.down
    drop_table :lists
  end
end