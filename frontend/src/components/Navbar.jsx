import React from "react";
import logo from "./zlogo.jpg";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <>
        {auth ? (
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
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Movie Booking</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
          </ul>
        </div>
      </nav>

        //--------------------------------------------------------


      ) : (

       
        <nav className="navbar navbar-expand-lg navbar-dark bg">
          <div>
            <img alt="logo" className="logo" src={logo} />
          </div>
          <Link className="navbar-brand" to="/register">CINE MANDIR</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav " id="nav">
              <li className="nav-item active">
              <Link className="nav-link" to="/register">Sign Up</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    
    </>
  );
};

export default Navbar;
