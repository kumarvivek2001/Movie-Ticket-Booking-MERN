const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/movie-ticket",
  // "mongodb+srv://user:<password>@cluster0.fc0b6vz.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) throw err;
    console.log("DATABASE IS CONNECTED! All set to go!");
  }
);
