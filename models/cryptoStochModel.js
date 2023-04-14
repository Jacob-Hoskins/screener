const mongoose = require("mongoose");

const StochSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
  },
  slowk: {
    type: String,
  },
  slowd: {
    type: String,
  },
  interval: {
    type: String,
    required: true,
  },
  previousdate: {
    type: String,
  },
  previousk: {
    type: String,
  },
  previousd: {
    type: String,
  },
});

const Stoch = mongoose.model("cryptoStoch", StochSchema);

module.exports = Stoch;
