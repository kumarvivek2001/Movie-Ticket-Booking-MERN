const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

let userSchema = new Schema({
  first_name: {
    require: true,
    type: String,
  },
  last_name: {
    require: true,
    type: String,
  },
  email: {
    unique: true,
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
  mobile: {
    require: true,
    unique: true,
    type: Number,
  },
  isAdmin: {
    type: Boolean,
    default: "false",
  },

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("Users", userSchema);
