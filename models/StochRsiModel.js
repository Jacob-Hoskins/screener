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
  previousdate: {
    type: String,
  },
  fastk: {
    type: String,
  },
  fastd: {
    type: String,
  },
  previousfastk: {
    type: String,
  },
  previousfastd: {
    type: String,
  },
  interval: {
    type: String,
    required: true,
  },
});

const StochRsi = mongoose.model("Stochrsi", StochRsiSchema);

module.exports = StochRsi;
