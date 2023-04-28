const mongoose = require("mongoose");

const symbolSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  exchange: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  rsiweekly: [
    {
      date: {
        type: String,
        required: true,
      },
      data: {
        type: String,
        required: true,
      },
    },
  ],
});

const Symbols = mongoose.model("Equites", symbolSchema);

module.exports = Symbols;
