const mongoose = require("mongoose");

const StochRsiSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
  },
  fastk: {
    type: String,
  },
  fastd: {
    type: String,
  },
  interval: {
    type: String,
    required: true,
  },
});

const StochRsi = mongoose.model("StochrsiMonthly", StochRsiSchema);

module.exports = StochRsi;
