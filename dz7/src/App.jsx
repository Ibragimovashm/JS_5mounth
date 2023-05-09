import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Item from "./Item";
import Cart from "./Cart";
import ItemAPI from "./ItemAPI";

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Item />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/itemAPI" element={<ItemAPI />} />
      </Routes>
    </Router>
  );
};

export default App;
