const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let movieSchema = new Schema({
  movie_name: {
    unique: true,
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  },
  runtime: {
    require: true,
    type: String,
  },
  seats: {
    require: true,
    type: Number,
  },

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Movies", movieSchema);
