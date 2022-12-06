import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";


function Bookinghitory() {
    const [bhistory, setHistory] = useState([])

    useEffect(() => {
        listhistory();
    }, []);

    async function listhistory() {

        const location = "localhost";
        const token = sessionStorage.getItem('token');
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };

        try {
            //user list
            const fetchResponse = await fetch(`http://${location}:3000/bookings/history/`, settings);
            const data = await fetchResponse.json();
            setHistory(data.history);
        }
        catch (e) {
            return e;
        }

    }


    return (
        <>
            <Header />
            <div className=" col-md-6 m-5  mx-auto">
                <h3 id="update3" className="Update3 text-white">BOOKING HISTORY</h3>
                <table className="table table-bordered table-responsive" id="movielist1" >

                    <thead className="thead-transparent text-white" id="moviethead1">
                        <tr className="head">
                            <th scope="col" className="head-text-center">Email</th>
                            <th scope="col" className="head-text-center">Movie Name</th>
                            <th scope="col" className="head-text-center">Date</th>
                            <th scope="col" className="head-text-center">Time</th>
                            <th scope="col" className="head-text-center">No of seats</th>
                            <th scope="col" className="head-text-center">Booking time</th>
                        </tr>
                    </thead>

                    <tbody className="m-3 p-5" id="movieData">
                        {bhistory.map(history => {
                            return (
                                <tr key={history._id}>
                                    <td className="text-center">{history.email}</td>
                                    <td className="text-center">{history.movie_name}</td>
                                    <td className="text-center">{history.date}</td>
                                    <td className="text-center">{history.time}</td>
                                    <td className="text-center">{history.no_of_seat}</td>
                                    <td className="text-center">{history.created_at}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </>
    );

}

export default Bookinghitory;