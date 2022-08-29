class CreateUniforms < ActiveRecord::Migration[6.1]
  def change
    create_table :uniforms do |t|
      t.string :name
      t.integer :number
      t.integer :team_id
    end
  end
end
