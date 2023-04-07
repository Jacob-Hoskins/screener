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
});

const Stoch = mongoose.model("StochMonthly", StochSchema);

module.exports = Stoch;
