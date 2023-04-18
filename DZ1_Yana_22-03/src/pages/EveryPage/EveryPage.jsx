import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EveryPage = () => {
  const [namePoki, SetNamePoki] = useState("");
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => SetNamePoki(resp.data.species.name));
  }, []);
  console.log(namePoki);
  return (
    <div>
      <p>{namePoki}</p>
    </div>
  );
};

export default EveryPage;
