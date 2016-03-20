class CreateFriendships < ActiveRecord::Migration
  def change
    drop_table :friendships do |t|
      t.integer :pet_id
      t.integer :friend_id
      t.string :state, default: "pending"
      t.datetime :friended_at

      t.timestamps null: false
    end
  end
end