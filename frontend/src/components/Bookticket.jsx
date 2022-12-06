import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Bookticket() {

    const location = "localhost";
    const [mname, setmname] = useState("");
    const [date, setdate] = useState("");
    const [time, settime] = useState("");
    const [no_of_seat, setno_of_seat] = useState("");
    const navigate = useNavigate();

    async function callbookticketAPI(e) {
        e.preventDefault();

        const data = {
            "movie_name": mname,
            "date": date,
            "time": time,
            "no_of_seat": no_of_seat,
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
            const fetchResponse = await fetch(`http://${location}:3000/bookings/input/`, settings);
            const data = await fetchResponse.json();
            window.alert(data.message);
            navigate("/payment");
            return data;

        }
        catch (e) {
            return e;
        }

    };


    return (
        <>
            <Header />
            <div className="contact-form4">
                <h2 id="headthree">BOOK MOVIE</h2>
                <form action="">
                    <p>Movie Name</p><input placeholder="Enter Movie Name" value={mname} onChange={e => setmname(e.target.value)} type="mname" />
                    <p>Date</p><input placeholder="Enter Date of booking" value={date} onChange={e => setdate(e.target.value)} type="date" />
                    <p>Time</p><input placeholder="Enter booking Time" value={time} onChange={e => settime(e.target.value)} type="time" />
                    <p>No. of Seats</p><input placeholder="Enter No. of Seats" value={no_of_seat} onChange={e => setno_of_seat(e.target.value)} type="number" />

                    <div className="btn-group" id="addbtn">
                        <button type="button" className="btn add_btn" onClick={callbookticketAPI} > Book Now </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Bookticket;