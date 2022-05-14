import { Route, Routes } from "react-router-dom";
import Header from './Components/Pages/Shared/Header/Header';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Reviews from './Components/Pages/Reviews/Reviews';
import Contact from './Components/Pages/Contact/Contact';
import Profile from './Components/Pages/Profile/Profile';
import Login from "./Components/Pages/LoginRegister/Login/Login";
import SignUp from "./Components/Pages/LoginRegister/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./Components/Pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
