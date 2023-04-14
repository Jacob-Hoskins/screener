const mongoose = require("mongoose");

const MacdSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  interval: {
    type: String,
    required: true,
  },
  type: {
    required: true,
    type: String,
  },
});

const Macd = mongoose.model("FailedSearch", MacdSchema);

module.exports = Macd;
