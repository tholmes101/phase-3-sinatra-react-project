class AddRankToTeams < ActiveRecord::Migration[6.1]
  def change
    add_column :teams, :rank, :integer
  end
end
