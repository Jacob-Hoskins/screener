const RsiModel = require("./models/RsiOneWeekModel");
const RsiMonthlyModel = require("./models/rsiOneMonthModel");
const StochModel = require("./models/StochModel");
const StochMonthlyModel = require("./models/stochMonthlyModel");
const StochRsiModel = require("./models/StochRsiModel");
const stochRsiMonthlyModel = require("./models/stochRsiMonthlyModel");
const MacdModel = require("./models/macdModels");
const MacdMonthlyModel = require("./models/macdMonthlyModel");

exports.rsiDBcreateWeekly = async (symbol, rsi, date, interval) => {
  try {
    const final = await RsiModel.create({
      symbol,
      data: rsi,
      date,
      interval,
    });
  } catch (err) {}
};

exports.rsiDBupdateWeekly = async (symbol, rsi, date, interval) => {
  try {
    const final = await RsiModel.updateOne(
      { symbol },
      {
        data: rsi,
        date,
        interval,
      }
    );
  } catch (err) {}
};

exports.rsiDBcreateMonthly = async (symbol, rsi, date, interval) => {
  try {
    const final = await RsiMonthlyModel.create({
      symbol,
      data: rsi,
      date,
      interval,
    });
  } catch (err) {}
};

exports.rsiDBupdateMonthly = async (symbol, rsi, date, interval) => {
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
};

exports.stochDBcreate = async (symbol, slowk, slowd, date, interval) => {
  try {
    const final = await StochModel.create({
      symbol,
      slowk,
      slowd,
      date,
      interval,
    });
  } catch (err) {}
};

exports.stochDBupdate = async (symbol, slowk, slowd, date, interval) => {
  try {
    const final = await StochModel.updateOne(
      { symbol },
      {
        slowk,
        slowd,
        date,
        interval,
      }
    );
  } catch (err) {}
};

exports.stochDBcreateMonthly = async (symbol, slowk, slowd, date, interval) => {
  try {
    const final = await StochMonthlyModel.create({
      symbol,
      slowk,
      slowd,
      date,
      interval,
    });
  } catch (err) {}
};

exports.stochDBupdateMonthly = async (symbol, slowk, slowd, date, interval) => {
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
};

exports.stochRsiDBcreate = async (symbol, fastk, fastd, date, interval) => {
  try {
    const final = await StochRsiModel.create({
      symbol,
      fastk,
      fastd,
      date,
      interval,
    });
  } catch (err) {}
};

exports.stochRsiDBupdate = async (symbol, fastk, fastd, date, interval) => {
  try {
    const final = await StochRsiModel.updateOne(
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
};

exports.stochRsiDBcreateMonthly = async (
  symbol,
  fastk,
  fastd,
  date,
  interval
) => {
  try {
    const final = await stochRsiMonthlyModel.create({
      symbol,
      fastk,
      fastd,
      date,
      interval,
    });
  } catch (err) {}
};

exports.stochRsiDBupdateMonthly = async (
  symbol,
  fastk,
  fastd,
  date,
  interval
) => {
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
};

exports.macdDBcreate = async (symbol, macd, signal, date, interval) => {
  try {
    const final = await MacdModel.create({
      symbol,
      macd,
      signal,
      date,
      interval,
    });
  } catch (err) {}
};

exports.macdDBupdate = async (symbol, macd, signal, date, interval) => {
  try {
    const final = await MacdModel.updateOne(
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
};

exports.macdDBcreateMonthly = async (symbol, macd, signal, date, interval) => {
  try {
    const final = await MacdMonthlyModel.create({
      symbol,
      macd,
      signal,
      date,
      interval,
    });
  } catch (err) {}
};

exports.macdDBupdateMonthly = async (symbol, macd, signal, date, interval) => {
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
};
