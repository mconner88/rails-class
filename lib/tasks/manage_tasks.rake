namespace :todo do
  desc "Clear current tasks"
  task :clear => :environment do
    Task.delete_all
    puts "Tasks deleted"
  end
  
  desc "Create tasks"
  task :create => :environment do
    ["Apples", "Bread", "Buy Milk", "Corn"].each do |t|
      Task.create(:title => t, :completed => false, :list_id => 1)
    end
    
    ["Shopping", "Post office"].each do |t|
      Task.create(:title => t, :completed => false, :list_id => 2)
    end

    puts "Tasks Created"
  end
end