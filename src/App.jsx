import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/offers" element={<Offers></Offers>}/>
          <Route path="/sign-in" element={<SignIn></SignIn>}/>
          <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}/>
          <Route path="/sign-up" element={<SignUp></SignUp>}/>
          <Route path="/profile" element={<Profile></Profile>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
