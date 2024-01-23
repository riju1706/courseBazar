import logo from "./logo.jpg";
import "./App.css";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import SignUp from "./page/signUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Payment from "./page/payment/Payment";
import NavbarComp from "./components/navbarComp/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Address from "./page/address/Address";
import Checkout from "./page/checkout/Checkout";
import CourseDetails from "./page/courseDetails/CourseDetails";
import Dashboard from "./page/dashboard/Dashboard";

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="payment" element={<Payment />} />
        <Route path="address" element={<Address />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="courseDetails" element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;
