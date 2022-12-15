import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// Layout (Header/Footer)
import Main from "./layouts/Main";
import { Artists } from "./pages/Artists/Artists.jsx";
import Home from './pages/Home/Home'
import Concerts from "./pages/Concerts/Concerts";
import Cart from "./pages/Cart/Cart";
import ArtistDetail from "./pages/ArtistDetail/ArtistDetail";
import NewArtist from "./pages/NewArtist/NewArtist";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./components/SignIn/Form/FormSI";
import userActions from "./redux/actions/userActions";
import Concert from "./pages/Concert/Concert"
import AdminLayout from "./layouts/Admin/AdminLayout/AdminLayout";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminConcerts from "./pages/AdminConcerts/AdminConcerts";
import AdminArtists from "./pages/AdminArtists/AdminArtists";
import AdminVenues from "./pages/Adminvenues/AdminVenues";
import NewConcert from "./pages/NewConcert/NewConcert";
import EditConcert from "./pages/EditConcert/EditConcert";

export default function App() {
  const dispatch = useDispatch()
  const { reLogin } = userActions
  // const { online, role } = useSelector(state => state.user)
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"))
      if (token) {
          dispatch(reLogin(token.token.user))
      }
      // eslint-disable-next-line
  }, [])  
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<AdminHome />}/>
          <Route path="concerts" element={<AdminConcerts />}/>
          <Route path="concerts/new" element={<NewConcert />}/>
          <Route path="concerts/edit/:id" element={<EditConcert />}/>
          <Route path="artists" element={<AdminArtists />}/>
          <Route path="venues" element={<AdminVenues />}/>
        </Route>  
        <Route path="/" element={<Main />} >
          <Route index element={<Home/>}/>
          <Route path="concerts" element={<Concerts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/artists" element={<Artists/>}/>
          <Route path="/artists/:id" element={<ArtistDetail/>}/>
          <Route path="/new-artist" element={<NewArtist/>}/>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="concerts/:id" element={<Concert />} />
          <Route path="home" element={<Home/>} />
        </Route>
      </Routes>
    </>
  );
}