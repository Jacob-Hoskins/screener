const mongoose = require("mongoose");

const CrpytoSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  exchanges: {
    type: String,
  },
  currencybase: {
    type: String,
  },
  currencyquote: {
    type: String,
  },
});

const crypto = mongoose.model("cryptos", CrpytoSchema);

module.exports = crypto;
