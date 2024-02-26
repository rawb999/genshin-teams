import React, { useState } from "react";
import CharacterGrid from "./Components/CharacterGrid";
import ResultGrid from "./Components/ResultGrid";
import "./App.css";


type Team = string[];

type TeamsState = Team[];


function App() {

  const [teams, setTeams] = useState<TeamsState>([]);


  const handleNewTeam = (newTeam: Team) => {
    if (teams.length >= 10) {
      alert("Maximum number of teams reached. Please delete a team before adding a new one.");
    } else {
      setTeams((prevTeams) => [...prevTeams, newTeam]);
    }
  };

  const handleDeleteTeam = (indexToDelete: number) => {
    setTeams((prevTeams) => prevTeams.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <main>
        <div className="page-container">
          <div className="left-content">
            <CharacterGrid onCharactersSelected={handleNewTeam} />
          </div>
          <div className="right-content">
          <ResultGrid teams={teams} onDeleteTeam={handleDeleteTeam} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;