// Dependencies
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

// Layout (Header/Footer)
import Main from "./layouts/Main";
// Import of pages
import Home from './pages/Home/Home'
import Concerts from "./pages/Concerts/Concerts";
import Concert from "./pages/Concert/Concert"
import AdminLayout from "./layouts/Admin/AdminLayout/AdminLayout";
import AdminHome from "./pages/AdminHome/AdminHome";
import { Redirect } from "react-router-dom";
import AdminConcerts from "./pages/AdminConcerts/AdminConcerts";
import AdminArtists from "./pages/AdminArtists/AdminArtists";
import AdminVenues from "./pages/Adminvenues/AdminVenues";

// Export to Index.js
export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<AdminHome />}/>
          <Route path="concerts" element={<AdminConcerts />}/>
          <Route path="artists" element={<AdminArtists />}/>
          <Route path="venues" element={<AdminVenues />}/>
        </Route>
        
        <Route path="/" element={<Main />} >
          <Route index element={<Home/>}/>
          <Route path="concerts" element={<Concerts />} />
          <Route path="concerts/:id" element={<Concert />} />
        </Route>
      </Routes>
    
    </>
  );
}