puts "Seeding data..."

# Seed your database here

uniform_names = ["Classic Edition","City Edition","Association","Icon","Statement"]

Team.create(name: "Boston Celtics", image:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/300px-Boston_Celtics.svg.png", rank: 10)
Team.create(name: "Charlotte Hornets", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/315px-Charlotte_Hornets_%282014%29.svg.png", rank: 24)
Team.create(name: "Washington Wizards", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/300px-Washington_Wizards_logo.svg.png", rank: 25)
Team.create(name: "Utah Jazz", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Utah_Jazz_logo_2022.svg/345px-Utah_Jazz_logo_2022.svg.png", rank: 26)
Team.create(name: "Chicago Bulls", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/300px-Chicago_Bulls_logo.svg.png", rank: 10)
Team.create(name: "Houston Rockets", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/240px-Houston_Rockets.svg.png", rank: 24)



Team.all.each do |team|
  3.times do
    Uniform.create(name: uniform_names.sample, number: rand(10..20), team_id: team.id)
 end
end


puts "✅ Done seeding!"
