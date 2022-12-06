import React from 'react';
import { isAdmin } from '../utils/auth';
import Header from './Header';
import Listallmovie from './Listallmovies';

function Body() {
  if (isAdmin()) {
    return (
      <>
        <Header />

        <div className="container main-container p-1 m-3 mx-auto">
          <header className="rowone"><h4>Hello Admin! Welcome to Cine Mandir</h4></header>
        </div>
        <div className='container2 main-container p-1 m-3 mx-auto'>
          <h4 className='rowtwo'>Enjoy the Latest Movies with Great Deals on Movie Tickets.<br></br>
            Check Showtimes. Book Tickets! Check Showtimes Near You & <br></br>
            Expericence the Imax, 4DX & Gold.Stunning Pin-Pitched Sound! Stunning Movie Experience. View Trailers. Book Movie Tickets. <br></br>Pre-Book
            Your Tickets and get extra discount.</h4>
        </div>
        <Listallmovie />

      </>
    )
  }
  else {
    return (
      <>
        <Header />


        <div className="container main-container p-1 m-3 mx-auto" >
          <header className="rowone"><h4>Hello! Welcome to Cine Mandir</h4></header>
        </div>
        <div className='container2 main-container p-1 m-3 mx-auto'>
          <p className='rowtwo'>Enjoy the Latest Movies with Great Deals on Movie Tickets.
            Check Showtimes. Book Tickets! Check Showtimes Near You & Expericence
            the Imax, 4DX & Gold.Stunning Pin-Pitched Sound! Stunning Movie Experience.
            View Trailers. Book Movie Tickets. Pre-Book F&B.</p>
        </div>
        <Listallmovie />

      </>
    )
  }
}

export default Body;