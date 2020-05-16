import React, { useState, useEffect } from "react";
import axios from "axios";
import { Router, Link, Redirect, navigate } from '@reach/router';

function Home({ id }) {
  const [inputVal, setInputVal] = useState("");
  //   const [peoples, setPeoples] = useState(null);
  //   const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api")
      //   .then((reponse) => setPeoples(reponse.data))
      //   .then((reponse) => setPlanets(reponse.data))
      .then((reponse) => setInputVal(reponse.data));
  }, []);

  function handleSearch(index) {
    const NewInput = [...inputVal];
    // const newPlanet = [...planets];
    NewInput.splice(index, 0);
    // newPlanet.splice(index, 1);
    setInputVal(NewInput);
    // setPlanets(newPlanet);
    console.log(inputVal[index]);
    // console.log(planets[index]);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          Search for:
          <select>
            <option
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            >
              people
            </option>
            <option
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            >
              planet
            </option>
          </select>
        </div>
      </form>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
           ID :
           <select>
               <option value={id}></option>
           
            </select>
          </div>
        </form>
        <button onClick={(handleSearch) => navigate('/:word/:id')}>Search</button>
      </div>
      
    </div>
  );
}

export default Home;
