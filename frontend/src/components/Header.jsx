import React from 'react';
import { isAdmin } from '../utils/auth';
import { Link } from "react-router-dom";
import logo from "./zlogo.jpg";

function logout(e) {
  e.preventDefault()
  sessionStorage.removeItem("token");
  window.location.replace("/");
}


function Header(props) {

  if (isAdmin()) {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg">
        <div>
          <img alt="logo" className="logo" src={logo} />
        </div>
        <Link className="navbar-brand" to="/register">CINE MANDIR</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
            </li>
            <br>
            </br>
            <li className="nav-item active">
              <Link className="nav-link" to="/addmovie">Add Movie</Link>
            </li>
            
            <li className="nav-item active">
              <Link className="nav-link" to="/listmovie">Update/Delete Movie</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/listuser">Registered User List</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" id="log" onClick={logout} to="/login">Logout
                {/* Logout ({JSON.parse(isAdmin).name}) */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  //--------------------------------------------------------



  else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg">
        <div>
          <img alt="logo" className="logo" src={logo} />
        </div>
        <Link className="navbar-brand" to="/register">CINE MANDIR</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav " >
            <li className="nav-item active">
              <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/bookticket">Book Ticket <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/bookinghistory">    Booking History</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/eticket">    E-Ticket</Link>
            </li>
            {/* <li className="nav-item active">
              <Link className="nav-link" to="/Payment">Payment</Link>
            </li> */}
            <Link className="nav-link active" id="log2" onClick={logout} to="/login">Logout
              {/* Logout ({JSON.parse(isAdmin).name}) */}
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
};

export default Header;