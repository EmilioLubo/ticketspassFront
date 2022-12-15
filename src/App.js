// Dependencies
import { Navigate, Route, Routes } from "react-router-dom";

// Layout (Header/Footer)
import Main from "./layouts/Main";
// Import of pages
import Home from './pages/Home/Home'
import Concerts from "./pages/Concerts/Concerts";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./components/SignIn/Form/FormSI";
import userActions from "./redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Concert from "./pages/Concert/Concert"
import AdminLayout from "./layouts/Admin/AdminLayout/AdminLayout";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminConcerts from "./pages/AdminConcerts/AdminConcerts";
import AdminArtists from "./pages/AdminArtists/AdminArtists";
import AdminVenues from "./pages/Adminvenues/AdminVenues";
import NewConcert from "./pages/NewConcert/NewConcert";

// Export to Index.js
export default function App() {
  const dispatch = useDispatch()
  const { reLogin } = userActions
  const { online, role } = useSelector(state => state.user)
  const token = JSON.parse(localStorage.getItem("token"))
  useEffect(() => {
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
          <Route path="artists" element={<AdminArtists />}/>
          <Route path="venues" element={<AdminVenues />}/>
        </Route>  
        <Route path="/" element={<Main />} >
          <Route index element={<Home/>}/>
          <Route path="concerts" element={<Concerts />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="concerts/:id" element={<Concert />} />
        </Route>
      </Routes>
    </>
  );
}