import React, { useState } from "react";
import CharacterGrid from "./Components/CharacterGrid";
import ResultGrid from "./Components/ResultGrid";
import "./App.css";
function App() {
  const [resultCharacters, setResultCharacters] = useState<string[]>([]);
  return (
    <div className="App">
      <header className="App-header">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </header>
      <main>
        <div className="page-container">
          <div className="left-content">
          <CharacterGrid onCharactersSelected={setResultCharacters} />
          </div>
          <div className="middle-content">
            <ResultGrid characterNames={resultCharacters} />
          </div>
          <div className="right-content"> </div>
        </div>
      </main>
    </div>
  );
}



export default App;
