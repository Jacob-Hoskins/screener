const CryptoModel = require("./models/allCryptosModel");
const RsiModel = require("./models/RsiOneWeekModel");
const CryptoRsiModel = require("./models/cryptoRsiWeekly");
const RsiMonthlyModel = require("./models/rsiOneMonthModel");
const CryptoRsiMonthlyModel = require("./models/cryptoRsiMonthly");
const StochModel = require("./models/StochModel");
const CryptoSochModel = require("./models/cryptoStochModel");
const StochMonthlyModel = require("./models/stochMonthlyModel");
const CryptoStochMonthlyModel = require("./models/cryptoStochMonthlyModel");
const StochRsiModel = require("./models/StochRsiModel");
const CryptoStochRsiModel = require("./models/cryptoStochRsiWeekly");
const stochRsiMonthlyModel = require("./models/stochRsiMonthlyModel");
const CryptoStochRsiMonthlyModel = require("./models/cryptoStochRsiMonthly");
const MacdModel = require("./models/macdModels");
const CryptoMacdModel = require("./models/CryptoMacdWeeklyModel");
const MacdMonthlyModel = require("./models/macdMonthlyModel");
const CryptoMacdMonthlyModel = require("./models/cryptoMacdMonthlyModel");
const failedModel = require("./models/failedSearch");

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

exports.rsiDBcreateWeekly = async (
  symbol,
  rsi,
  date,
  interval,
  pdate,
  prsi,
  type
) => {
  if (type === "stock") {
    try {
      const final = await RsiModel.create({
        symbol,
        data: rsi,
        date,
        interval,
        previousdate: pdate,
        previousrsi: prsi,
      });
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoRsiModel.create({
        symbol,
        data: rsi,
        date,
        interval,
        previousdate: pdate,
        previousrsi: prsi,
      });
    } catch (err) {}
  }
};

exports.rsiDBupdateWeekly = async (
  symbol,
  rsi,
  date,
  interval,
  pdate,
  prsi,
  type
) => {
  if (type === "stock") {
    try {
      const final = await RsiModel.updateOne(
        { symbol },
        {
          data: rsi,
          date,
          interval,
          previousdate: pdate,
          previousrsi: prsi,
        }
      );
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoRsiModel.updateOne(
        { symbol },
        {
          data: rsi,
          date,
          interval,
          previousdate: pdate,
          previousrsi: prsi,
        }
      );
    } catch (err) {}
  }
};

exports.rsiDBcreateMonthly = async (symbol, rsi, date, interval, type) => {
  if (type === "stock") {
    try {
      const final = await RsiMonthlyModel.create({
        symbol,
        data: rsi,
        date,
        interval,
      });
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoRsiMonthlyModel.create({
        symbol,
        data: rsi,
        date,
        interval,
      });
    } catch (err) {}
  }
};

exports.rsiDBupdateMonthly = async (symbol, rsi, date, interval, type) => {
  if (type === "stock") {
    try {
      const final = await RsiMonthlyModel.updateOne(
        { symbol },
        {
          data: rsi,
          date,
          interval,
        }
      );
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoRsiMonthlyModel.updateOne(
        { symbol },
        {
          data: rsi,
          date,
          interval,
        }
      );
    } catch (err) {}
  }
};

exports.stochDBcreate = async (
  symbol,
  slowk,
  slowd,
  date,
  interval,
  pk,
  pd,
  pdate,
  type
) => {
  if (type === "stock") {
    try {
      const final = await StochModel.create({
        symbol,
        slowk,
        slowd,
        date,
        interval,
        previousk: pk,
        previousd: pd,
        previousdate: pdate,
      });
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoSochModel.create({
        symbol,
        slowk,
        slowd,
        date,
        interval,
        previousk: pk,
        previousd: pd,
        previousdate: pdate,
      });
    } catch (err) {}
  }
};

exports.stochDBupdate = async (
  symbol,
  slowk,
  slowd,
  date,
  interval,
  pk,
  pd,
  pdate,
  type
) => {
  if (type === "stock") {
    try {
      const final = await StochModel.updateOne(
        { symbol },
        {
          slowk,
          slowd,
          date,
          interval,
          previousk: pk,
          previousd: pd,
          previousdate: pdate,
        }
      );
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoSochModel.updateOne(
        { symbol },
        {
          slowk,
          slowd,
          date,
          interval,
          previousk: pk,
          previousd: pd,
          previousdate: pdate,
        }
      );
    } catch (err) {}
  }
};

exports.stochDBcreateMonthly = async (
  symbol,
  slowk,
  slowd,
  date,
  interval,
  type
) => {
  if (type === "stock") {
    try {
      const final = await StochMonthlyModel.create({
        symbol,
        slowk,
        slowd,
        date,
        interval,
      });
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoStochMonthlyModel.create({
        symbol,
        slowk,
        slowd,
        date,
        interval,
      });
    } catch (err) {}
  }
};

exports.stochDBupdateMonthly = async (symbol, slowk, slowd, date, interval) => {
  if (type === "stock") {
    try {
      const final = await StochMonthlyModel.updateOne(
        { symbol },
        {
          slowk,
          slowd,
          date,
          interval,
        }
      );
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoStochMonthlyModel.updateOne(
        { symbol },
        {
          slowk,
          slowd,
          date,
          interval,
        }
      );
    } catch (err) {}
  }
};

exports.stochRsiDBcreate = async (
  symbol,
  fastk,
  fastd,
  date,
  interval,
  pfk,
  pfd,
  pdate,
  type
) => {
  if (type === "stock") {
    try {
      const final = await StochRsiModel.create({
        symbol,
        fastk,
        fastd,
        date,
        previousdate: pdate,
        previousfastk: pfk,
        previousfastd: pfd,
        interval,
      });
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoStochRsiModel.create({
        symbol,
        fastk,
        fastd,
        date,
        previousdate: pdate,
        previousfastk: pfk,
        previousfastd: pfd,
        interval,
      });
    } catch (err) {}
  }
};

exports.stochRsiDBupdate = async (
  symbol,
  fastk,
  fastd,
  date,
  interval,
  pfk,
  pfd,
  pdate,
  type
) => {
  if (type === "stock") {
    try {
      const final = await StochRsiModel.updateOne(
        {
          symbol,
        },
        {
          fastk,
          fastd,
          date,
          previousdate: pdate,
          previousfastk: pfk,
          previousfastd: pfd,
          interval,
        }
      );
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoStochRsiModel.updateOne(
        {
          symbol,
        },
        {
          fastk,
          fastd,
          date,
          previousdate: pdate,
          previousfastk: pfk,
          previousfastd: pfd,
          interval,
        }
      );
    } catch (err) {}
  }
};

exports.stochRsiDBcreateMonthly = async (
  symbol,
  fastk,
  fastd,
  date,
  interval,
  type
) => {
  if (type === "stock") {
    try {
      const final = await stochRsiMonthlyModel.create({
        symbol,
        fastk,
        fastd,
        date,
        interval,
      });
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoStochRsiMonthlyModel.create({
        symbol,
        fastk,
        fastd,
        date,
        interval,
      });
    } catch (err) {}
  }
};

exports.stochRsiDBupdateMonthly = async (
  symbol,
  fastk,
  fastd,
  date,
  interval,
  type
) => {
  if (type === "stock") {
    try {
      const final = await stochRsiMonthlyModel.updateOne(
        {
          symbol,
        },
        {
          fastk,
          fastd,
          date,
          interval,
        }
      );
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoStochRsiMonthlyModel.updateOne(
        {
          symbol,
        },
        {
          fastk,
          fastd,
          date,
          interval,
        }
      );
    } catch (err) {}
  }
};

exports.macdDBcreate = async (
  symbol,
  macd,
  signal,
  date,
  interval,
  pd,
  pm,
  ps,
  type
) => {
  if (type === "stock") {
    try {
      const final = await MacdModel.create({
        symbol,
        macd,
        signal,
        date,
        interval,
        previousdate: pd,
        previousmacd: pm,
        previoussignal: ps,
      });
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoMacdModel.create({
        symbol,
        macd,
        signal,
        date,
        interval,
        previousdate: pd,
        previousmacd: pm,
        previoussignal: ps,
      });
    } catch (err) {}
  }
};

exports.macdDBupdate = async (
  symbol,
  macd,
  signal,
  date,
  interval,
  pd,
  pm,
  ps,
  type
) => {
  if (type === "stock") {
    const final = await MacdModel.create(
      {
        symbol,
      },
      {
        macd,
        signal,
        date,
        interval,
        previousdate: pd,
        previousmacd: pm,
        previoussignal: ps,
      }
    );
  }
  if (type === "crypto") {
    try {
      const final = await CryptoMacdModel.updateOne(
        {
          symbol,
        },
        {
          macd,
          signal,
          date,
          interval,
          previousdate: pd,
          previousmacd: pm,
          previoussignal: ps,
        }
      );
    } catch (err) {}
  }
};

exports.macdDBcreateMonthly = async (
  symbol,
  macd,
  signal,
  date,
  interval,
  type
) => {
  if (type === "stock") {
    try {
      const final = await MacdMonthlyModel.create({
        symbol,
        macd,
        signal,
        date,
        interval,
      });
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoMacdMonthlyModel.create({
        symbol,
        macd,
        signal,
        date,
        interval,
      });
    } catch (err) {}
  }
};

exports.macdDBupdateMonthly = async (
  symbol,
  macd,
  signal,
  date,
  interval,
  type
) => {
  if (type === "stock") {
    try {
      const final = await MacdMonthlyModel.updateOne(
        {
          symbol,
        },
        {
          macd,
          signal,
          date,
          interval,
        }
      );
    } catch (err) {}
  }
  if (type === "crypto") {
    try {
      const final = await CryptoMacdMonthlyModel.updateOne(
        {
          symbol,
        },
        {
          macd,
          signal,
          date,
          interval,
        }
      );
    } catch (err) {}
  }
};
