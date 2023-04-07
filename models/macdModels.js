const mongoose = require("mongoose");

const MacdSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
  },
  macd: {
    type: String,
  },
  signal: {
    type: String,
  },
  previousdate: {
    type: String,
  },
  previousmacd: {
    type: String,
  },
  previoussignal: {
    type: String,
  },
  interval: {
    type: String,
    required: true,
  },
});

const Macd = mongoose.model("Macd", MacdSchema);

module.exports = Macd;
