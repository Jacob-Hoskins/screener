const mongoose = require("mongoose");

const RsiOneWeekSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  data: {
    type: String,
  },
  interval: {
    type: String,
    required: true,
  },
  previousdate: {
    type: String,
  },
  previousrsi: {
    type: String,
  },
});

const Rsi = mongoose.model("Rsi", RsiOneWeekSchema);

module.exports = Rsi;
