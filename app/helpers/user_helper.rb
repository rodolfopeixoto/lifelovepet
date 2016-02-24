module UserHelper
  def age(user)
    age = Date.today.year - user.year
    return age
  end
end