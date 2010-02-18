class List < ActiveRecord::Base
  has_many :tasks
  
  def num_incomplete_tasks
    Task.incomplete_items_for_list(id).size
  end
end