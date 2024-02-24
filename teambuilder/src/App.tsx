import React, { useState } from "react";
import CharacterGrid from "./Components/CharacterGrid";
import ResultGrid from "./Components/ResultGrid";
import "./App.css";


type Team = string[];

type TeamsState = Team[];


function App() {

  const [teams, setTeams] = useState<TeamsState>([]);


  const handleNewTeam = (newTeam: Team) => {
    if (teams.length < 5) {
      setTeams((prevTeams: TeamsState) => [...prevTeams, newTeam]);
    } else {
      alert("Maximum of 5 teams have been generated.");
    }
  };

  return (
    <div className="App">
      ...
      <main>
        <div className="page-container">
          <div className="left-content">
            <CharacterGrid onCharactersSelected={handleNewTeam} />
          </div>
          <div className="middle-content">
            <ResultGrid teams={teams} />
          </div>
          ...
        </div>
      </main>
    </div>
  );
}

export default App;