const mongoose = require("mongoose");

const CrpytoSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
  data: {
    type: String,
  },
  interval: {
    type: String,
  },
  previousdate: {
    type: String,
  },
  previousrsi: {
    type: String,
  },
});

const crypto = mongoose.model("cryptorsiMonthly", CrpytoSchema);

module.exports = crypto;
