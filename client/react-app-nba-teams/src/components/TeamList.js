import React from "react";
import TeamCard from "./TeamCard";
import {Card} from "semantic-ui-react"

// Builds a list of items for an NBA team card.
function TeamList({ teams, onDeleteTeam, onUpdateTeam}) {
  return (
     <Card.Group itemsPerRow = {4} 
     className="cards">
      {teams.map((team) => {
        return (
          <TeamCard
            key={team.id}
            team={team}
            uniform={team.uniforms}
            onDeleteTeam={onDeleteTeam}
            onUpdateTeam={onUpdateTeam}
          />
        );
      })}
    </Card.Group>
  );
}

export default TeamList;