module ApplicationHelper
	def firstNameCity(city)
       if city.size <= 9
       	city
       else
       	city = city.split(" ")
       	city[0]
       end
	end
end
