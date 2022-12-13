// Dependencies
import { Route, Routes } from "react-router-dom";

// Layout (Header/Footer)
import Main from "./layouts/Main.jsx";
// Import of pages
import Home from './pages/Home/Home.jsx'
import { Artists } from "./pages/Artists/Artists.jsx";

// Export to Index.js
export default function App() {
  return (
    <>
    <Main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/artists" element={<Artists/>}/>
      </Routes>
    </Main>
    </>
  );
}