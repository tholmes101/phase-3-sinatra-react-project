import React from "react";
import Header from "./Header";
import TeamPage from "./TeamPage";

// The purpose of this app is to 
// 1. display all NBA teams
// 2. add a new NBA team to the page by submitting the form
// 3. change the rank of any NBA team, or like/unlike a team
// 4. search for a team by their name and see a filtered list of teams,
// 5. delete an NBA team from the page.


function App() {
  return (
    <div className="App">
      <Header />
      <TeamPage />
    </div>
  );
}

export default App;
