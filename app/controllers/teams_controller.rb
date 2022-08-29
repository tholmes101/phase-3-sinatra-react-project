class TeamsController < ApplicationController
    set :default_content_type, 'application/json'
  
    # Add your routes here
    get '/teams' do
      teams = Team.all
      teams.to_json(include: :uniforms)
    end
  
    get '/teams/:id' do
      team = Team.find(params[:id])
      team.to_json(include: :uniforms)
    end
  
    post "/teams" do
      Team.create(params).to_json
    end
  
    delete "/teams/:id" do
      team = Team.find(params[:id])
      team.destroy
    end   
end