const axios = require("axios");
const Symbols = require("./models/allSymbolsModel");
const request = require("./request");

exports.startingPoint = async () => {
  request.allStocks();

  let all_syms = await Symbols.find();
  for (let x = 0; x <= all_syms.length - 5027; x++) {
    let symbol = all_syms[x].symbol;
    request.stockRSI(symbol, "1week");
    request.StockStoch(symbol, "1week");
    request.StockStochRsi(symbol, "1week");
    request.StockMacd(symbol, "1week");

    request.stockRSI(symbol, "1month");
    request.StockStoch(symbol, "1month");
    request.StockStochRsi(symbol, "1month");
    request.StockMacd(symbol, "1month");
  }
};
