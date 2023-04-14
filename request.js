const axios = require("axios");
const Symbols = require("./models/allSymbolsModel");
const failedSearchModel = require("./models/failedSearch");
const DBinteract = require("./addData");
const url = require("./dataFiltering/urls");
const failedSearch = require("./dataFiltering/failedSearches");

const allStocksUrl = "https://api.twelvedata.com/stocks?exchange=nasdaq";
const allCryptos = "https://api.twelvedata.com/cryptocurrencies";

//from here we can add them to the DB
//TODO: move the symbols try catch to add data file
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
};

exports.allCryptos = async () => {
  let cryptos = await axios(allCryptos);
  for (let x = 0; x <= cryptos.data.data.length - 1; x++) {
    let sym = cryptos.data.data[x].symbol;
    let base = cryptos.data.data[x].currency_base;
    let quote = cryptos.data.data[x].currency_quote;
    const exchange = cryptos.data.data[x].available_exchanges[0];

    DBinteract.addCryptos(sym, exchange, base, quote);
  }
};

//2week completed
exports.stockRSI = async (symbol, interval, type) => {
  let rsiUrl = url.rsiUrl(symbol, interval);
  const rsi = await axios(rsiUrl);
  //console.log(rsi.data);
  let output = rsi.data.values;

  if (rsi.data.code === 429) {
    // console.log("LIMIT FOUND");
    try {
      let addFailed = await failedSearchModel.create({
        symbol,
        interval,
        type,
      });
    } catch (err) {
      //console.log(err);
    }
  } else {
    //console.log("Not at limit");
  }

  try {
    const rsi = output[0].rsi;
    const date = output[0].datetime;
    const pdate = output[1].datetime;
    const prsi = output[1].rsi;

    //console.log(rsi);

    if (interval === "1week") {
      DBinteract.rsiDBcreateWeekly(
        symbol,
        rsi,
        date,
        interval,
        pdate,
        prsi,
        type
      );
      DBinteract.rsiDBupdateWeekly(
        symbol,
        rsi,
        date,
        interval,
        pdate,
        prsi,
        type
      );
    } else if (interval === "1month") {
      DBinteract.rsiDBcreateMonthly(symbol, rsi, date, interval, type);
      DBinteract.rsiDBupdateMonthly(symbol, rsi, date, interval, type);
    }
  } catch (err) {}
};

//2week completed
exports.StockStoch = async (symbol, interval, type) => {
  //updates URL with proper info
  const StockStoch = url.stochUrl(symbol, interval);

  //searches URL and grabs data
  const stoch = await axios(StockStoch);
  const output = stoch.data.values;

  if (rsi.data.code === 429) {
    // console.log("LIMIT FOUND");
    try {
      let addFailed = await failedSearchModel.create({
        symbol,
        interval,
        type,
      });
    } catch (err) {
      //console.log(err);
    }
  } else {
    //console.log("Not at limit");
  }

  try {
    k = output[0].slow_k;
    d = output[0].slow_d;
    date = output[0].datetime;
    const pk = output[1].slow_k;
    const pd = output[1].slow_d;
    const pdate = output[1].datetime;

    if (interval === "1week") {
      DBinteract.stochDBcreate(
        symbol,
        k,
        d,
        date,
        interval,
        pk,
        pd,
        pdate,
        type
      );
      DBinteract.stochDBupdate(
        symbol,
        k,
        d,
        date,
        interval,
        pk,
        pd,
        pdate,
        type
      );
    } else if (interval === "1month") {
      DBinteract.stochDBcreateMonthly(symbol, k, d, date, interval);
      DBinteract.stochDBupdateMonthly(symbol, k, d, date, interval);
    }
  } catch (err) {}
};

//2week completed
exports.StockStochRsi = async (symbol, interval, type) => {
  //loops through all symbols to search
  const StockStochRsi = url.stochRsiUrl(symbol, interval);

  const stochRsi = await axios(StockStochRsi);
  output = stochRsi.data.values;

  if (rsi.data.code === 429) {
    // console.log("LIMIT FOUND");
    try {
      let addFailed = await failedSearchModel.create({
        symbol,
        interval,
        type,
      });
    } catch (err) {
      //console.log(err);
    }
  } else {
    //console.log("Not at limit");
  }

  try {
    const k = output[0].fast_k;
    const d = output[0].fast_d;
    const pk = output[1].fast_k;
    const pd = output[1].fast_d;
    const date = output[0].datetime;
    const pdate = output[1].datetime;

    if (interval === "1week") {
      DBinteract.stochRsiDBcreate(
        symbol,
        k,
        d,
        date,
        interval,
        pk,
        pd,
        pdate,
        type
      );
      DBinteract.stochRsiDBupdate(
        symbol,
        k,
        d,
        date,
        interval,
        pk,
        pd,
        pdate,
        type
      );
    } else if (interval === "1month") {
      DBinteract.stochRsiDBcreateMonthly(symbol, k, d, date, interval);
      DBinteract.stochRsiDBupdateMonthly(symbol, k, d, date, interval);
    }
  } catch (err) {}
};

//2week completed
exports.StockMacd = async (symbol, interval, type) => {
  const StockMacd = url.macdUrl(symbol, interval);

  const macd = await axios(StockMacd);
  let output = macd.data.values;

  if (rsi.data.code === 429) {
    // console.log("LIMIT FOUND");
    try {
      let addFailed = await failedSearchModel.create({
        symbol,
        interval,
        type,
      });
    } catch (err) {
      //console.log(err);
    }
  } else {
    //console.log("Not at limit");
  }

  try {
    let macdData = output[0].macd;
    let macdSignal = output[0].macd_signal;
    let date = output[0].datetime;
    let pdate = output[1].datetime;
    let pmacd = output[1].macd;
    let psig = output[1].macd_signal;

    if (interval === "1week") {
      DBinteract.macdDBcreate(
        symbol,
        macdData,
        macdSignal,
        date,
        interval,
        pdate,
        pmacd,
        psig,
        type
      );
      DBinteract.macdDBupdate(
        symbol,
        output[0].macd,
        output[0].macd_signal,
        output[0].datetime,
        interval,
        pdate,
        pmacd,
        psig,
        type
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

exports.failedRsiSearch = async (symbol, interval, type) => {
  //first check if it returns error code, if so do nothing & skip to the next function
  let rsiUrl = url.rsiUrl(symbol, interval);
  const rsi = await axios(rsiUrl);
  //console.log(rsi.data);
  let output = rsi.data.values;

  if (rsi.data.code === 429) {
    //console.log("LIMIT FOUND");
    try {
      let addFailed = await failedSearchModel.create({
        symbol,
        interval,
        type,
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    //console.log("Not at limit");
  }

  //if you can grab the data take it, update RSI model
  try {
    const rsi = output[0].rsi;
    const date = output[0].datetime;
    const pdate = output[1].datetime;
    const prsi = output[1].rsi;
    if (type === "stock") {
      if (interval === "1week") {
        DBinteract.rsiDBcreateWeekly(
          symbol,
          rsi,
          date,
          interval,
          pdate,
          prsi,
          type
        );
        DBinteract.rsiDBupdateWeekly(
          symbol,
          rsi,
          date,
          interval,
          pdate,
          prsi,
          type
        );
        const delete_symbol = await failedSearchModel.deleteOne({
          symbol: symbol,
        });
      } else if (interval === "1month") {
        DBinteract.rsiDBcreateMonthly(symbol, rsi, date, interval, type);
        DBinteract.rsiDBupdateMonthly(symbol, rsi, date, interval, type);
      }
    }
    if (type === "crypto") {
      if (interval === "1week") {
        DBinteract.rsiDBcreateWeekly(
          symbol,
          rsi,
          date,
          interval,
          pdate,
          prsi,
          type
        );
        DBinteract.rsiDBupdateWeekly(
          symbol,
          rsi,
          date,
          interval,
          pdate,
          prsi,
          type
        );
      } else if (interval === "1month") {
        DBinteract.rsiDBcreateMonthly(symbol, rsi, date, interval, type);
        DBinteract.rsiDBupdateMonthly(symbol, rsi, date, interval, type);
      }
    }
  } catch (err) {
    //console.log(err);
  }

  //Delete symbol from failed search list
};
