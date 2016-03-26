class CreateFriendships < ActiveRecord::Migration
  def self.up
  	drop_table :friendships
  end

  def self.down
    create_table :friendships do |t|
      t.references :friendable, polymorphic: true
      t.integer  :friend_id
      t.string   :status

      t.timestamps
    end
  end

end