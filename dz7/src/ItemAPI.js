import React, { useEffect, useState } from "react";

function ItemAPI() {
  const [data, setData] = useState([]);
  const getAPi = async () => {
    const response = await fetch(
      `https://fakerapi.it/api/v1/products?_quantity=`
    );
    const data = await response.json();
    return data.data;
  };

  useEffect(() => {
    getAPi().then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((data) => (
        <li>{data.name}</li>
      ))}
    </div>
  );
}

export default ItemAPI;
