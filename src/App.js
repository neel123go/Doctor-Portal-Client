import { Route, Routes } from "react-router-dom";
import Header from './Components/Pages/Shared/Header/Header';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Reviews from './Components/Pages/Reviews/Reviews';
import Contact from './Components/Pages/Contact/Contact';
import Profile from './Components/Pages/Profile/Profile';
import Login from "./Components/Pages/LoginRegister/Login/Login";

function App() {
  return (
    <div className="bg-white">
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
      </Routes>
    </div>
  );
}

export default App;
