import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Home,
  Addmovie,
  Listuser,
  Listmovie,
  Bookticket,
  Bookinghistory,
  Eticket,
  Payment,
} from "./components";

ReactDOM.render(
  <Router>
       {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addmovie" element={<Addmovie />} />
      <Route path="/listmovie" element={<Listmovie />} />
      <Route path="/listuser" element={<Listuser />} />
      <Route path="/bookticket" element={<Bookticket />} />
      <Route path="/bookinghistory" element={<Bookinghistory />} />
      <Route path="/eticket" element={<Eticket />} />
      <Route path="/payment" element={<Payment/>} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
