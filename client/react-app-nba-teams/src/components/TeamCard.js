import React, { useState } from "react";
import {Card, Image} from "semantic-ui-react";

// Builds an NBA Team card
function TeamCard({ team, uniform, onDeleteTeam, onUpdateTeam }) {
  const { id, name, image, rank} = team;

  const [Likes, setLikes] = useState(true);
  const [updatedRank, setUpdatedRank] = useState(rank);

  // Change a like to an unlike
  function handleToggleLikes() {
    setLikes((Likes) => !Likes);
  }

  // Deletes an NBA team card
  function handleDeleteClick() {
    fetch(`http://localhost:9292/teams/${id}`, {
      method: "DELETE",
    });
    onDeleteTeam(id);
  }

  // Changes the rank of an NBA team card
  function handleRankFormSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:9292/teams/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rank: updatedRank }),
    })
      .then((response) => response.json())
      .then((updatedTeam) => {
        onUpdateTeam(updatedTeam);
      });
  }

  return (
    <Card>
      <Image src={image} alt={name} />
      <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        Rank #: {rank}
        <ol>
         Uniforms: {uniform.map (uniform => <li>Name: {uniform.name} | Number: {uniform.number}</li>)} 
          </ol>
      </Card.Description>
  
      {Likes ? (
        <button className="primary" onClick={handleToggleLikes}>
          Like
        </button>
      ) : (
        <button onClick={handleToggleLikes}>UnLike</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
      <form onSubmit={handleRankFormSubmit}>
        <input
          type="number"
          step="0"
          placeholder="New rank..."
          value={updatedRank}
          onChange={(event) => setUpdatedRank(parseFloat(event.target.value))}
        />
        <button type="submit">Update Rank #</button>
      </form>
      </Card.Content>
      </Card>
  
  );
}

export default TeamCard;