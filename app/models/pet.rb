class Pet < ActiveRecord::Base
	  default_scope { order('id DESC') }
end