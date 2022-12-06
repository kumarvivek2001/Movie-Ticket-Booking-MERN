import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Addmovie() {

    const location = "localhost";
    const [mname, setmname] = useState("");
    const [description, setdescription] = useState("");
    const [runtime, setruntime] = useState("");
    const [seats, setseats] = useState("");
    const navigate = useNavigate();

    async function calladdmovieAPI(e) {
        e.preventDefault();

        const data = {
            "movie_name": mname,
            "description": description,
            "runtime": runtime,
            "seats": seats,
        }
        const token = sessionStorage.getItem('token');
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        };

        try {
            //register api call
            const fetchResponse = await fetch(`http://${location}:3000/movies/add/`, settings);
            const data = await fetchResponse.json();
            window.confirm(data.message);
            navigate("/home");
            return data;
        }
        catch (e) {
            return e;
        }

    };


    return (
        <>
            <Header />

            <div className="contact-form3" >
                <h2>ADD MOVIE</h2>
                <form action="">
                    <p>MOVIE NAME</p><input placeholder="Enter Movie Name" value={mname} onChange={e => setmname(e.target.value)} type="mname" />
                    <p>MOVIE DESCRIPTION</p><input placeholder="Enter Movie Description" value={description} onChange={e => setdescription(e.target.value)} type="description" />
                    <p>RUNTIME (HH:MM)</p><input placeholder="Enter Runtime" value={runtime} onChange={e => setruntime(e.target.value)} type="time" />
                    <p>SEATS AVAILABLE</p><input placeholder="Enter available seats" value={seats} onChange={e => setseats(e.target.value)} type="number" />
                    <div className="btn-group" id="addbtn">
                        <button type="button" className="btn add_btn" onClick={calladdmovieAPI} > ADD MOVIE </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Addmovie;