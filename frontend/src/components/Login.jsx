import React from "react";
import { useState } from "react";
import logo from "./zlogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function callLoginAPI(e) {
        e.preventDefault();
        const location = "localhost";
        const data = {
            "email": email,
            "password": password
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
            //signin api call
            const fetchResponse = await fetch(`http://${location}:3000/users/login/`, settings);
            const data = await fetchResponse.json();



            if (data.token) {
                sessionStorage.setItem('token', data.token);
                navigate("/home");
            }
            else {
                window.confirm("Invalid Email / Password!");
            }

        }
        catch (e) {
            return e;
        }
    };

    return (<>
        <Navbar />
        <div className="contact-form">
            <img className="avatar" src={logo} alt="Logo" />
            <h2>LOGIN</h2>
            <form action="">
                <p>Email</p><input placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <p>Password</p><input placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
                <input className="login_btn" type="submit" onClick={callLoginAPI} value="Sign in" />
                <p><input type="checkbox" />Remember Me</p>
                <div className="account">Don't have an account?<Link to="/SignUp" id="up">Sign Up</Link></div>
            </form>
        </div>
    </>
    );
}

export default Login;