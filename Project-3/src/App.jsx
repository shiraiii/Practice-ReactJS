import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/page";
import GameBoard from "./components/GameBoard/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="game" element={<GameBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
