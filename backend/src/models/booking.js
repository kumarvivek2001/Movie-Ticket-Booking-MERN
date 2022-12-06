const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookingSchema = new Schema({
  username: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  movie_name: {
    require: true,
    type: String,
  },
  date: {
    require: true,
    type: String,
  },
  time: {
    require: true,
    type: String,
  },
  no_of_seat: {
    require: true,
    type: Number,
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
