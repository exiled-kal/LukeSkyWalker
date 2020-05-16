import React, { useState, useEffect } from "react";
import axios from "axios";

function Planet({ id }) {
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios.get("https://swapi.dev/api/planets/" + id)
      .then((response) => setPlanets(response.data))
      .catch(console.log);
  }, []);

  if(planets == null) return 'loading......';
  return (
    <div>
      <h1>{planets.name}</h1>
      
        <h3>Climate:</h3>
        {planets.climate}
        <h3>Terrain:</h3>
        {planets.terrain}
        <h3>Surface Water:</h3>
        {planets.surface_water}
        <h3>Population:</h3>
        {planets.population}
      
    </div>
  );
}

export default Planet;
