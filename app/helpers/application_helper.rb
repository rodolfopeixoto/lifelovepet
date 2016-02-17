module ApplicationHelper
	def firstNameCity(city)
      unless city.empty?
      	city = city.split(" ")
        city[0]
      end
	end
end
