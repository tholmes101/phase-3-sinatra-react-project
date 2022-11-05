import React, { useState } from "react";

// Adds a new NBA team to the page by submitting the form
function NewTeamForm({ onAddTeam }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rank, setRank] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:9292/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        rank: rank,
      }),
    })
      .then((response) => response.json())
      .then((newTeam) => onAddTeam(newTeam));
  }

  return (
    <div className="new-team-form">
      <h2>New Team</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Team name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <input
          type="number"
          name="rank"
          step="0"
          placeholder="Rank"
          value={rank}
          onChange={(event) => setRank(parseFloat(event.target.value))}
        />
        <button type="submit">Add Team</button>
      </form>
    </div>
  );
}

export default NewTeamForm;