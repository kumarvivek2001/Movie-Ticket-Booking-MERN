const bookingTemplate = require("../models/booking");
const moviePrototype = require("../models/movie");
const jwt = require("jsonwebtoken");

//movie-booking-api
const MBooking = async (req, res) => {
  try {
    if (
      !req.body.movie_name ||
      !req.body.date ||
      !req.body.time ||
      !req.body.no_of_seat
    ) {
      return res.json({ message: "Requested Movie Not Available!!" });
    }

    //check for correct movie
    const movieAlreadyExist = await moviePrototype.findOne({
      movie_name: req.body.movie_name,
    });

    if (movieAlreadyExist) {
      const token = req.headers?.authorization?.split(" ")[1];
      const decoded = jwt.decode(token);

      const bookingData = {
        username: decoded.first_name,
        email: decoded.email,
        movie_name: req.body.movie_name,
        date: req.body.date,
        time: req.body.time,
        no_of_seat: req.body.no_of_seat,
      };

      const result = await bookingTemplate.create(bookingData);

      return res.json({
        message: "Booking success redirecting to payment page",
        status: 200,
        data: result,
      });
    } else {
      return res.json({
        message: "Movie not found!",
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
      data: [],
    });
  }
};

//booking history api
const Bookinghistory = async (req, res) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    const decoded = jwt.decode(token);

    const history = await bookingTemplate.find({
      email: decoded.email,
    });
    if (history !== null) {
      return res.json({
        message: "Booking history below",
        history: history,
      });
    } else {
      return res.json({
        message: "No bookings found",
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
      data: [],
    });
  }
};

//eticket show
const eticket = async (req, res) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    const decoded = jwt.decode(token);

    const history = await bookingTemplate.find({
      email: decoded.email,
    });

    const elength = history.length - 1;

    return res.json({
      message: "E-Ticket",
      history: history[elength],
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
      data: [],
    });
  }
};

module.exports = {
  MBooking,
  Bookinghistory,
  eticket,
};
