import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/offers" element={<Offers></Offers>}/>
          <Route path="/sign-in" element={<SignIn></SignIn>}/>
          <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}/>
          <Route path="/sign-up" element={<SignUp></SignUp>}/>
          <Route path="/profile" element={<Profile></Profile>}/>
          
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </>
  )
}

export default App
