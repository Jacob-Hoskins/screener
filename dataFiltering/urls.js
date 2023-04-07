exports.rsiUrl = (sym, interval) => {
  let url = `https://api.twelvedata.com/rsi?symbol=${sym}&interval=${interval}&apikey=34c2aa350f114f5e9d76191cae40f049`;
  return url;
};

exports.stochUrl = (sym, interval) => {
  let url = `https://api.twelvedata.com/stoch?symbol=${sym}&interval=${interval}&apikey=34c2aa350f114f5e9d76191cae40f049`;
  return url;
};

exports.stochRsiUrl = (sym, interval) => {
  let url = `https://api.twelvedata.com/stochrsi?symbol=${sym}&interval=${interval}&apikey=34c2aa350f114f5e9d76191cae40f049`;
  return url;
};

exports.macdUrl = (sym, interval) => {
  let url = `https://api.twelvedata.com/macd?symbol=${sym}&interval=${interval}&apikey=34c2aa350f114f5e9d76191cae40f049`;
  return url;
};
