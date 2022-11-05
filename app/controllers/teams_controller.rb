class TeamsController < ApplicationController
    set :default_content_type, 'application/json'
  
    # reads all the teams and uniforms from the database
    # returns a JSON response with an array of all the team and uniform data
    get '/teams' do
      teams = Team.all
      teams.to_json(include: :uniforms)
    end
    
    # finds the team in the database using its ID
    # sends a JSON-formatted response of the team and uniform data
    get '/teams/:id' do
      team = Team.find(params[:id])
      team.to_json(include: :uniforms)
    end
  
    # adds the team and uniforms to the database
    post "/teams" do
      Team.create(params).to_json(include: :uniforms)
    end
  
    # finds the team in the database using the ID
    # deletes the team
    delete "/teams/:id" do
      team = Team.find(params[:id])
      team.destroy
    end   
end