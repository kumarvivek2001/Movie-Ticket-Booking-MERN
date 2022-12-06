import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Listallmovie() {
    const [lmovies, setMovies] = useState([])

    useEffect(() => {
        listmovies();
    }, []);

    async function listmovies() {

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
            const fetchResponse = await fetch(`http://${location}:3000/movies/listallmovie/`, settings);
            const data = await fetchResponse.json();
            setMovies(data.listMovie);
        }
        catch (e) {
            return e;
        }

    }


    return (
        <>
            {lmovies.map(listMovie => {
                return (<>
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="card text-center mb-5" >
                                <div className="card-header" id="cardhead"><b>Ongoing Movies</b></div>
                                <div className="card-body">
                                    <h5 className="card-title">{listMovie.movie_name}</h5>
                                    <p className="card-text">{listMovie.description}</p>
                                    <Link to="/bookticket" className="btn btn-primary">Book Now</Link>
                                </div>
                                <div className="card-footer text-White" id="cardfoot"><b>Runtime (HH:MM) :-</b>
                                    {listMovie.runtime}
                                </div>
                                <div className="card-footer text-White" id="cardfoot"><b>Seats :-</b>
                                    {listMovie.seats}
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                )
            })}
        </>
    );

}

export default Listallmovie;