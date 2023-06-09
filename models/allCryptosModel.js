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

  weeklyRsi: [
    {
      rsiOutput: {
        type: String,
        required: true,
      },
      rsiDate: {
        type: String,
        required: true,
      },
    },
  ],

  biweeklyRsi: [
    {
      rsiOutput: {
        type: String,
        required: true,
      },
      rsiDate: {
        type: String,
        required: true,
      },
    },
  ],

  rsiMonthly: [
    {
      rsiOutput: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],

  stochWeekly: [
    {
      stoch_k: {
        type: String,
        required: true,
      },
      stoch_d: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],

  biweeklyStoch: [
    {
      stoch_k: {
        type: String,
        required: true,
      },
      stoch_d: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],

  stochMonthly: [
    {
      stoch_k: {
        type: String,
        required: true,
      },
      stoch_d: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],

  stochRsi: [
    {
      fast_k: {
        type: String,
        required: true,
      },
      fast_d: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],

  biweeklyStochRsi: [
    {
      fast_k: {
        type: String,
        required: true,
      },
      fast_d: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],

  stochRsiMonthly: [
    {
      fast_k: {
        type: String,
        required: true,
      },
      fast_d: {
        type: String,
        requied: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],

  weeklyMacd: [
    {
      macd: {
        type: String,
        required: true,
      },
      signal: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],

  biweeklyMacd: [
    {
      macd: {
        type: String,
        required: true,
      },
      signal: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],

  monthlyMacd: [
    {
      macd: {
        type: String,
        required: true,
      },
      signal: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],
});

const crypto = mongoose.model("cryptos", CrpytoSchema);

module.exports = crypto;
