const axios = require("axios");
const Symbols = require("./models/allSymbolsModel");
const DBinteract = require("./addData");
const url = require("./dataFiltering/urls");

const allStocksUrl = "https://api.twelvedata.com/stocks?exchange=nasdaq";

//from here we can add them to the DB
exports.allStocks = async () => {
  let symbols = await axios(allStocksUrl);

  for (let x = 0; x <= symbols.data.data.length - 1; x++) {
    try {
      let newSymbol = await Symbols.create({
        symbol: symbols.data.data[x].symbol,
        name: symbols.data.data[x].name,
        type: symbols.data.data[x].type,
        exchange: symbols.data.data[x].exchange,
        rsiTest: 30,
      });
    } catch (err) {}
  }
  console.log("Out of for loop: started roughly 8:30");
};

exports.stockRSI = async (symbol, interval) => {
  let rsiUrl = url.rsiUrl(symbol, interval);
  const rsi = await axios(rsiUrl);
  let output = rsi.data.values;

  try {
    const rsi = output[0].rsi;
    const date = output[0].datetime;

    console.log(rsi);

    if (interval === "1week") {
      DBinteract.rsiDBcreateWeekly(symbol, rsi, date, interval);
      DBinteract.rsiDBupdateWeekly(symbol, rsi, date, interval);
    } else if (interval === "1month") {
      DBinteract.rsiDBcreateMonthly(symbol, rsi, date, interval);
      DBinteract.rsiDBupdateMonthly(symbol, rsi, date, interval);
    }
  } catch (err) {}
};

exports.StockStoch = async (symbol, interval) => {
  //updates URL with proper info
  const StockStoch = url.stochUrl(symbol, interval);

  //searches URL and grabs data
  const stoch = await axios(StockStoch);
  const output = stoch.data.values;

  try {
    k = output[0].slow_k;
    d = output[0].slow_d;
    date = output[0].datetime;

    if (interval === "1week") {
      DBinteract.stochDBcreate(symbol, k, d, date, interval);
      DBinteract.stochDBupdate(symbol, k, d, date, interval);
    } else if (interval === "1month") {
      DBinteract.stochDBcreateMonthly(symbol, k, d, date, interval);
      DBinteract.stochDBupdateMonthly(symbol, k, d, date, interval);
    }
  } catch (err) {}
};

exports.StockStochRsi = async (symbol, interval) => {
  //loops through all symbols to search
  const StockStochRsi = url.stochRsiUrl(symbol, interval);

  const stochRsi = await axios(StockStochRsi);
  output = stochRsi.data.values;

  try {
    const k = output[0].fast_k;
    const d = output[0].fast_d;
    const date = output[0].datetime;

    if (interval === "1week") {
      DBinteract.stochRsiDBcreate(symbol, k, d, date, interval);
      DBinteract.stochRsiDBupdate(symbol, k, d, date, interval);
    } else if (interval === "1month") {
      DBinteract.stochRsiDBcreateMonthly(symbol, k, d, date, interval);
      DBinteract.stochRsiDBupdateMonthly(symbol, k, d, date, interval);
    }
  } catch (err) {}
};

exports.StockMacd = async (symbol, interval) => {
  const StockMacd = url.macdUrl(symbol, interval);

  const macd = await axios(StockMacd);
  let output = macd.data.values;

  try {
    let macdData = output[0].macd;
    let macdSignal = output[0].macd_signal;
    let date = output[0].datetime;

    if (interval === "1week") {
      DBinteract.macdDBcreate(symbol, macdData, macdSignal, date, interval);
      DBinteract.macdDBupdate(
        symbol,
        output[0].macd,
        output[0].macd_signal,
        output[0].datetime,
        interval
      );
    } else if (interval === "1month") {
      DBinteract.macdDBcreateMonthly(
        symbol,
        macdData,
        macdSignal,
        date,
        interval
      );
      DBinteract.macdDBupdateMonthly(
        symbol,
        output[0].macd,
        output[0].macd_signal,
        output[0].datetime,
        interval
      );
    }
  } catch (err) {}
};
