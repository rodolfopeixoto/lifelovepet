class RemoveDateOfBirthToPets < ActiveRecord::Migration
  def change
    remove_column :pets, :dateOfBirth, :date
  end
end
