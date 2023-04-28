const axios = require("axios");
const Symbols = require("./models/symbolsModel");
const Cryptos = require("./models/allCryptosModel");
const failedCryptoModel = require("./models/failedSearch");
const request = require("./request");
const dataCheck = require("./dataFiltering/splitRSI");

sleep = async (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

exports.startingPointEquities = async () => {
  //request.allStocks();
  // 5028
  while (true) {
    let all_syms = await Symbols.find();
    for (let x = 0; x <= all_syms.length - 1; x++) {
      //dataCheck.checkRateLimit(x);

      let symbol = all_syms[x].symbol;
      // console.log(symbol);

      //console.log(symbol);
      await sleep(1550);

      // await request.stockRSI(symbol, "1week", "stock");
      // await request.StockStoch(symbol, "1week", "stock");
      // await request.StockStochRsi(symbol, "1week", "stock");
      // // await request.StockMacd(symbol, "1week", "stock");
      // await request.newStockMacd(symbol, "1week", "stock");

      await sleep(1500);

      // request.stockRSI(symbol, "1month", "stock");
      // request.StockStoch(symbol, "1month", "stock");
      // await sleep(1700);
      // request.StockStochRsi(symbol, "1month", "stock");
      await request.newStockMacd(symbol, "1month", "stock");
    }
    //console.log("fails", failedSearches.failedList);
    // console.log("Out of for loop in equities");
  }
};

exports.startingPointCryptos = async () => {
  //request.allCryptos();
  // 3822
  console.log("In Cryptos");
  let all_cryptos = await Cryptos.find();
  for (let x = 0; x <= all_cryptos.length; x++) {
    let symbol = all_cryptos[x].symbol;

    await sleep(1500);

    // request.stockRSI(symbol, "1week", "crypto");
    // request.StockStoch(symbol, "1week", "crypto");
    // request.StockStochRsi(symbol, "1week", "crypto");
    request.newStockMacd(symbol, "1week", "crypto");

    await sleep(1500);

    // request.stockRSI(symbol, "1month", "crypto");
    // request.StockStoch(symbol, "1month", "crypto");
    // request.StockStochRsi(symbol, "1month", "crypto");
    request.newStockMacd(symbol, "1month", "crypto");
  }
};

exports.failedSearchResults = async () => {
  let failed = await failedCryptoModel.find();
  let failed_length = failed.length - 1;
  console.log("In Failed List");
  //console.log(failed.length);
  while (failed_length != 0) {
    request.failedRsiSearch(
      failed[failed_length].symbol,
      failed[failed_length].interval,
      failed[failed_length].type
    );

    //TODO: finish the failed search and then youre done.

    //console.log(failed[failed_length]);
    let new_num = failed_length - 1;
    failed_length = new_num;
  }
};
