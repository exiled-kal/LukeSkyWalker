import React, { useState, useEffect } from "react";
import axios from "axios";

function People({ id }) {
  const [peoples, setPeoples] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/" + id)
      .then((response) => setPeoples(response.data))
      .catch(console.log);
  }, []);


  if(peoples == null) return 'loading......';

  return (
    <div>
      <div>
        <h1>{peoples.name}</h1>
        <p>
          <h3>Height:</h3> {peoples.height} cm
          
          <h3>Hair Color:</h3> {peoples.hair_color}
          
          <h3>Eye Color:</h3> {peoples.skin_color}
          
          <h3>Skin Color:</h3> {peoples.eye_color}
          
        </p>
      </div>
    </div>
  );
}
export default People;
