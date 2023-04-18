import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((resp) => setPokemon(resp.data.results));
  }, []);
  console.log(pokemon);
  return (
    <div>
      <ul>
        {pokemon.map((poki, index) => (
          <li key={index}>
            <NavLink to={`${index + 1}`}>{poki.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonPage;
