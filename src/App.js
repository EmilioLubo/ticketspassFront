// Dependencies
import { Route, Routes } from "react-router-dom";
// Layout (Header/Footer)
import Main from "./layouts/Main";
// Import of pages
import { Artists } from "./pages/Artists/Artists.jsx";
import Home from './pages/Home/Home'
import Concerts from "./pages/Concerts/Concerts";
// Export to Index.js
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route index element={<Home/>}/>
          <Route path="concerts" element={<Concerts />} />
          <Route path="/artists" element={<Artists/>}/>
        </Route>
      </Routes>
    </>
  );
}