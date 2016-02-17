class AddAgeMonthToPets < ActiveRecord::Migration
  def change
    add_column :pets, :ageMonth, :integer
  end
end
