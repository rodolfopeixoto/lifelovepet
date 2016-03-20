module ApplicationHelper
	def firstNameCity(city)
       if city.size <= 9
       	city
       else
       	city = city.split(" ")
       	city[0]
       end
	end


	def setting_language(word)
      t('pets.show.' + word)
	end
 
end
