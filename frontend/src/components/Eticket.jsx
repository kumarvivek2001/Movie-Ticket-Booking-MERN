import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";


function Eticket() {
    const [eticket, setEticket] = useState({})

    useEffect(() => {
        listeticket();
    }, []);

    async function listeticket() {

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
            const fetchResponse = await fetch(`http://${location}:3000/bookings/eticket/`, settings);
            const data = await fetchResponse.json();
            console.log(data.history);
            setEticket(data.history);
        }
        catch (e) {
            return e;
        }

    }


    return (
        <>
            <Header />
            <div className=" col-md-6 m-5 mx-auto">
                <h3 id="update4" className="Update4 text-white">E-TICKET</h3>
                <table className="table table-bordered table-responsive" id="eticket" >

                    <thead className="thead-transparent text-white">
                        <tr>
                            <th scope="col" className="text-center">BOOKING ID</th>
                            <th scope="col" className="text-center">EMAIL</th>
                            <th scope="col" className="text-center">MOVIE NAME</th>
                            <th scope="col" className="text-center">DATE</th>
                            <th scope="col" className="text-center">TIME</th>
                            <th scope="col" className="text-center">NO OF SEATS</th>
                        </tr>
                    </thead>

                    <tbody className="m-3 p-5" id="eticketData">
                        <tr>
                            <td className="text-center">{eticket._id}</td>
                            <td className="text-center">{eticket.email}</td>
                            <td className="text-center">{eticket.movie_name}</td>
                            <td className="text-center">{eticket.date}</td>
                            <td className="text-center">{eticket.time}</td>
                            <td className="text-center">{eticket.no_of_seat}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );

}

export default Eticket;