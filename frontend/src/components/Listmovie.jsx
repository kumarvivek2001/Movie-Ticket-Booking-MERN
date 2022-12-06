import React from "react";
import {useState, useEffect} from "react";
import Header from "./Header";

function Listmovie() {
    const [lmovies, setMovies] = useState([])

    useEffect(() => {
        listmovies();
    }, []);

    async function listmovies(){
        
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

    async function deleteMovie(_id){
        if(window.confirm("Do you want to delete the movie?")){
            const location="localhost";
            const data={
                "_id":_id
            }

            const token = sessionStorage.getItem('token');
            const settings={
                method: 'DELETE',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
            };

            try {
            //delete movie
            const fetchResponse = await fetch(`http://${location}:3000/movies/delete/`, settings);
            const data = await fetchResponse.json();
            listmovies();
            return data;
            }
            catch (e) {
                return e;
            }

        }
    }

    async function updateMovie(_id){
        if(window.confirm("Do you want to edit the movie?")){
            const location="localhost";
            const data={
                "_id":_id,
            }

            const token = sessionStorage.getItem('token');
            const settings={
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                body: JSON.stringify(data)
            },
            
            };

            try {
            //user list
            const fetchResponse = await fetch(`http://${location}:3000/movies/specificMovie/`, settings);
            const data2 = await fetchResponse.json();
            console.log(data2);
            listmovies();
            return data;
            }
            catch (e) {
                return e;
            }

        }
    }
  return (
      <>
            <Header/>
    <div className="listmovies">
      <div className="container">
        <title>List Movies</title>
        
        <div className="container main-container">
            <div className= " col-md-10 m-5 p-5 mx-auto">
                <h3 id="update" className="Update text-white">EDIT/DELETE MOVIE</h3>
                <table className="table table-bordered table-responsive" id="ulist2" >

                    <thead className="thead-transparent">
                        <tr>
                            <th scope="col" className="text-center">MOVIE NAME</th>
                            <th scope="col" className="text-center">DESCRIPTION</th>
                            <th scope="col" className="text-center">RUNTIME(HH:MM)</th> 
                            <th scope="col" className="text-center">SEATS</th> 
                            <th scope="col" className="text-center">EDIT</th> 
                            <th scope="col" className="text-center">DELETE</th>                 
                        </tr>
                    </thead>

                    <tbody className= "m-5 p-7" id="userData">
                        {lmovies.map(listMovie => {
                            return(
                            <tr key={listMovie._id}>
                                <td className="text-center">{listMovie.movie_name}</td>
                                <td className="text-center">{listMovie.description}</td>
                                <td className="text-center">{listMovie.runtime}</td>
                                <td className="text-center">{listMovie.seats}</td>
                                <td className="text-center1"><button onClick={()=>updateMovie(listMovie._id)}>Edit</button></td>
                                <td className="text-center2"><button onClick={()=>deleteMovie(listMovie._id)}>Delete</button></td>
                            </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
 
        </div>

      </div>
    </div>
    </>
  );
  
}

export default Listmovie;