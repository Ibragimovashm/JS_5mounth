import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PokemonPage from "./pages/PokemonPage/PokemonPage";
import EveryPage from "./pages/EveryPage/EveryPage";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">MainPage</NavLink>
            <NavLink to="/about">AboutPage</NavLink>
            <NavLink to="/pokemon">PokemonPage</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/pokemon/:id" element={<EveryPage />} />
      </Routes>
    </>
  );
}

export default App;
