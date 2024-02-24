import React, { useState } from "react";
import CharacterGrid from "./Components/CharacterGrid";
import ResultGrid from "./Components/ResultGrid";
import "./App.css";


type Team = string[];

type TeamsState = Team[];


function App() {

  const [teams, setTeams] = useState<TeamsState>([]);


  const handleNewTeam = (newTeam: Team) => {
    setTeams((prevTeams: TeamsState) => {
      if (prevTeams.length < 5) {
        return [...prevTeams, newTeam];
      } else {
        return [newTeam, ...prevTeams.slice(1)];
      }
    });
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