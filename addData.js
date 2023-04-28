const crypto = require("./models/allCryptosModel");
const CryptoModel = require("./models/allCryptosModel");
const symbolModel = require("./models/symbolsModel");

exports.addCryptos = async (sym, exc, base, quote) => {
  try {
    let final = await CryptoModel.create({
      symbol: sym,
      exchanges: exc,
      currencybase: base,
      currencyquote: quote,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.rsiSymUpdate = async (symbol, rsi, date, pdate, prsi, type) => {
  if (type === "stock") {
    try {
      const final = await symbolModel.updateOne(
        { symbol },
        {
          weeklyRsi: [
            {
              rsiOutput: rsi,
              rsiDate: date,
            },
          ],
          biweeklyRsi: [
            {
              rsiOutput: prsi,
              rsiDate: pdate,
            },
          ],
        }
      );
    } catch (err) {}
  } else if (type === "crypto") {
    try {
      const final = await CryptoModel.updateOne(
        { symbol },
        {
          weeklyRsi: [
            {
              rsiOutput: rsi,
              rsiDate: date,
            },
          ],
          biweeklyRsi: [
            {
              rsiOutput: prsi,
              rsiDate: pdate,
            },
          ],
        }
      );
    } catch (err) {}
  }
};

exports.rsiSymMonthlyUpdate = async (symbol, rsi, date, type) => {
  if (type === "stock") {
    try {
      const final = await symbolModel.updateOne(
        { symbol },
        {
          rsiMonthly: {
            rsiOutput: rsi,
            date: date,
          },
        }
      );
    } catch (err) {}
  } else if (type === "crypto") {
    try {
      const final = await CryptoModel.updateOne(
        { symbol },
        {
          rsiMonthly: {
            rsiOutput: rsi,
            date: date,
          },
        }
      );
    } catch (err) {}
  }
};

exports.stochSymWeeklyUpdate = async (
  symbol,
  stoch_k,
  stoch_d,
  date,
  pk,
  pd,
  pdate,
  type
) => {
  if (type === "stock") {
    try {
      const final = await symbolModel.updateOne(
        { symbol },
        {
          stochWeekly: [
            {
              stoch_k,
              stoch_d,
              date,
            },
          ],
          biweeklyStoch: {
            stoch_k: pk,
            stoch_d: pd,
            date: pdate,
          },
        }
      );
    } catch (err) {}
  } else if (type === "crypto") {
    try {
      const final = await CryptoModel.updateOne(
        { symbol },
        {
          stochWeekly: [
            {
              stoch_k,
              stoch_d,
              date,
            },
          ],
          biweeklyStoch: {
            stoch_k: pk,
            stoch_d: pd,
            date: pdate,
          },
        }
      );
    } catch (err) {}
  }
};

exports.stochSymMonthlyUpdate = async (symbol, k, d, date, type) => {
  try {
    if (type === "stock") {
      const final = await symbolModel.updateOne(
        { symbol },
        {
          stochMonthly: [
            {
              stoch_k: k,
              stoch_d: d,
              date,
            },
          ],
        }
      );
    } else if (type === "crypto") {
      const final = await CryptoModel.updateOne(
        { symbol },
        {
          stochMonthly: [
            {
              stoch_k: k,
              stoch_d: d,
              date,
            },
          ],
        }
      );
    }
  } catch (err) {}
};

exports.stochRsiSymUpdate = async (symbol, k, d, date, pk, pd, pdate, type) => {
  try {
    if (type === "stock") {
      const final = await symbolModel.updateOne(
        { symbol },
        {
          stochRsi: [
            {
              fast_k: k,
              fast_d: d,
              date,
            },
          ],
          biweeklyStochRsi: [
            {
              fast_k: pk,
              fast_d: pd,
              date: pdate,
            },
          ],
        }
      );
    } else if (type === "crypto") {
      const final = await CryptoModel.updateOne(
        { symbol },
        {
          stochRsi: [
            {
              fast_k: k,
              fast_d: d,
              date,
            },
          ],
          biweeklyStochRsi: [
            {
              fast_k: pk,
              fast_d: pd,
              date: pdate,
            },
          ],
        }
      );
    }
  } catch (err) {}
};

exports.stochRsiMonthlySymUpdate = async (symbol, k, d, date, type) => {
  try {
    if (type === "stock") {
      const final = await symbolModel.updateOne(
        { symbol },
        {
          stochRsiMonthly: [
            {
              fast_k: k,
              fast_d: d,
              date,
            },
          ],
        }
      );
    } else if (type === "crypto") {
      const final = await CryptoModel.updateOne(
        { symbol },
        {
          stochRsiMonthly: [
            {
              fast_k: k,
              fast_d: d,
              date,
            },
          ],
        }
      );
    }
  } catch (err) {}
};

exports.macdSymUpdate = async (
  symbol,
  macd,
  signal,
  date,
  pdate,
  pmacd,
  psig,
  type
) => {
  try {
    if (type === "stock") {
      const final = await symbolModel.updateOne(
        { symbol },
        {
          weeklyMacd: [
            {
              macd,
              signal,
              date,
            },
          ],
          biweeklyMacd: [
            {
              macd: pmacd,
              signal: psig,
              date: pdate,
            },
          ],
        }
      );
    } else if (type === "crypto") {
      const final = await CryptoModel.updateOne(
        { symbol },
        {
          weeklyMacd: [
            {
              macd,
              signal,
              date,
            },
          ],
          biweeklyMacd: [
            {
              macd: pmacd,
              signal: psig,
              date: pdate,
            },
          ],
        }
      );
    }
  } catch (err) {}
};

exports.macdSymUpdateMonthly = async (symbol, macd, signal, date, type) => {
  try {
    if (type === "stock") {
      const final = await symbolModel.updateOne(
        { symbol },
        {
          monthlyMacd: [
            {
              macd,
              signal,
              date,
            },
          ],
        }
      );
    } else if (type === "crypto") {
      const final = await CryptoModel.updateOne(
        { symbol },
        {
          monthlyMacd: [
            {
              macd,
              signal,
              date,
            },
          ],
        }
      );
    }
  } catch (err) {}
};
