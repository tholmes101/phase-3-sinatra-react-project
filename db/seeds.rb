puts "🌱 Seeding spices..."

# Seed your database here

uniform_names = ["Classic Edition", "City Edition","Association","Icon","Statement"]

Team.create(name: "Milwaukee Bucks")
Team.create(name: "Boston Celtics")
Team.create(name: "Atlanta Hawks")
Team.create(name: "Charlotte Hornets")
Team.create(name: "Miami Heat")

Team.all.each do |team|
  3.times do
    Uniform.create(name: uniform_names.sample, number: rand(10..25), team_id: team.id)
  end
end
puts "✅ Done seeding!"
