const res = require("express/lib/response");
const moviePrototype = require("../models/movie");

//list all movie api
const listallMovie = async (req, res) => {
  const listMovie = await moviePrototype.find({});
  if (listMovie !== null) {
    return res.json({
      listMovie: listMovie,
    });
  } else {
    return res.json({
      message: "No movies to display!!",
    });
  }
};

//add a new movie api
const addM = async (req, res) => {
  try {
    if (!req.body.movie_name || !req.body.description || !req.body.runtime) {
      return res.json({ message: "Malformed Request!!" });
    }

    const movieAlreadyExist = await moviePrototype.findOne({
      movie_name: req.body.movie_name,
    });

    if (movieAlreadyExist) {
      return res.json({ message: "Movie already exists!!" });
    }

    const movieData = {
      movie_name: req.body.movie_name,
      description: req.body.description,
      runtime: req.body.runtime,
      seats: req.body.seats,
    };

    const result = await moviePrototype.create(movieData);

    return res.json({
      message: "Movie creation success",
      status: 200,
      data: result,
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

//update movie api
const updateMovie = async (req, res) => {
  try {
    const movieData = {
      movie_name: req.body.movie_name,
      description: req.body.description,
      runtime: req.body.runtime,
      seats: req.body.seats,
    };

    const result = await moviePrototype.findOneAndUpdate(
      { _id: req.body._id },
      movieData
    );

    return res.json({
      message: "Movie updated success",
      status: 200,
      data: movieData,
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

//delete movie api
const deleteMovie = async (req, res) => {
  try {
    const result = await moviePrototype.deleteOne({ _id: req.body._id });
    if (result !== null) {
      return res.json({
        message: "Movie delete success",
        status: 200,
      });
    } else {
      return res.json({
        message: "Movie not found, nothing deleted",
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

//search movie api
const searchMovie = async (req, res) => {
  try {
    const searchBar = await moviePrototype.findOne({
      movie_name: req.body.movie_name,
    });
    if (searchBar !== null) {
      return res.json({
        message: "Movie found",
        searchBar: searchBar,
      });
    } else {
      return res.json({
        message: "Movie not found",
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



//specific movie details api
const specificMovie = async (req, res) => {
  try {
    const infoMovie = await moviePrototype.findOne({ _id: req.body._id });
    return res.json({
      message: "Movie Details below",
      data: infoMovie,
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
  listallMovie,
  addM,
  updateMovie,
  deleteMovie,
  searchMovie,
  specificMovie,
};
