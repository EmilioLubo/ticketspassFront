
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./layouts/Main";
import { Artists } from "./pages/Artists/Artists.jsx";
import Home from './pages/Home/Home'
import Concerts from "./pages/Concerts/Concerts";
import ArtistDetail from "./pages/ArtistDetail/ArtistDetail";
import NewArtist from "./pages/NewArtist/NewArtist";
import Concert from "./pages/Concert/Concert"
import AdminLayout from "./layouts/Admin/AdminLayout/AdminLayout";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminConcerts from "./pages/AdminConcerts/AdminConcerts";
import AdminArtists from "./pages/AdminArtists/AdminArtists";
import AdminVenues from "./pages/Adminvenues/AdminVenues";

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
          <Route path="/artists" element={<Artists/>}/>
          <Route path="/artists/:id" element={<ArtistDetail/>}/>
          <Route path="/new-artist" element={<NewArtist/>}/>
          <Route path="concerts/:id" element={<Concert />} />
        </Route>
      </Routes>
    </>
  );
}