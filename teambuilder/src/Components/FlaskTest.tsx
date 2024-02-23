import React, { useEffect, useState } from "react";
import "../App.css";

interface MembersData {
  members: string[];
}

function FlaskTest() {
  const [data, setData] = useState<MembersData | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/members')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div className = 'flasktest'>
      {data ? (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FlaskTest;
