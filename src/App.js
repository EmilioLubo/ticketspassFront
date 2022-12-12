// Dependencies
import { json, Route, Routes } from "react-router-dom";

// Layout (Header/Footer)
import Main from "./layouts/Main.jsx";
import Concerts from "./pages/Concerts/Concerts.jsx";
// Import of pages
import Home from './pages/Home/Home.jsx'

// Export to Index.js
export default function App() {
  return (
    <>
    <Main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/concerts" element={<Concerts />} />
      </Routes>
    </Main>
    </>
  );
}