class Task < ActiveRecord::Base
  belongs_to :list

  validates_uniqueness_of :title
  # validates_presence_of :list_id

  def self.incomplete_items_for_list(list_id)
    Task.find(:all, :conditions => {:completed => false, :list_id => list_id})
  end
end