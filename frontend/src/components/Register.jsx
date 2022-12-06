import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import logo from "./zlogo.jpg";


function Register() {

    const location = "localhost";
    const [fname , setfname] = useState("");
    const [lname , setlname] = useState("");
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");
    const [mobile , setmobile] = useState("");
    const navigate = useNavigate();

    async function callregisterAPI(e) {
        e.preventDefault();

        const data = {
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "password": password,
            "mobile": mobile
        }

        

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        try {
            //register api call
            const fetchResponse = await fetch(`http://${location}:3000/users/register/`, settings);
            const data = await fetchResponse.json();
            navigate("/");
            window.confirm(data.message)
            return data;
        } 
        catch (e) {
            return e;
        }

    };

    const clearState = () => {
        setfname("");
        setlname("")
        setemail("");
        setpassword("");
        setmobile("");
      };
    

    function SubmitButton() {
        if (fname&& lname && email && password && mobile) {
          return (
            <button
              id="green"
              type="submit"
              className="btn btn-success"
              onClick={callregisterAPI}
            >
              Sign Up
            </button>
          );
        } else {
          return (
            <button type="button"  id="green1" className="btn btn-success" disabled>
              Sign Up
            </button>
          );
        }
      }



  return (
    <>
    <Navbar/>
    <div className="contact-form2">
    <img className="avatar" src={logo} alt="Logo" />
    <h2>REGISTER</h2>
    <form action="">
    <p>First Name</p><input placeholder="Enter FirstName" value={fname} onChange={e => setfname(e.target.value)} type="fname" />
    <p>Last Name</p><input placeholder="Enter LastName" value={lname} onChange={e => setlname(e.target.value)} type="lname" />
      <p>Email</p><input placeholder="Enter Email" value={email} onChange={e => setemail(e.target.value)} type="email" />
      <p>Mobile no.</p><input placeholder="Enter Mobile no." value={mobile} onChange={e => setmobile(e.target.value)} type="mobile" />
      <p>Password</p><input placeholder="Enter Password" value={password} onChange={e => setpassword(e.target.value)} type="password" />

      <div className="btn-group">
          <button type="button" className="btn signup_btn" onClick={clearState} > Cancel </button> <SubmitButton />
                        </div>
    </form>
  </div>
  </>
  );
}

export default Register;