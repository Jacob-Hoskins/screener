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
});

const Rsi = mongoose.model("Rsimonthly", RsiOneWeekSchema);

module.exports = Rsi;
