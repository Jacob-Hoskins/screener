const axios = require("axios");

exports.getRsiValues = (symbol) => {
  let url = `https://www.alphavantage.co/query?function=STOCHRSI&symbol=${symbol}&interval=daily&time_period=10&series_type=close&fastkperiod=6&fastdmatype=1&apikey=75f707054bmshbde81d972bea09ap116e71jsnbea4ea2b8fca`;
  let data;
  const serperator = (obj) => {
    const res = [];
    const keys = Object.keys(obj);
    res.push({
      key: obj[keys],
    });
    return res;
  };
  axios
    .request(url)
    .then(function (response) {
      //   console.log(response.data);
      data = response.data;
      console.log(serperator(data));
    })
    .catch(function (error) {
      console.error(error);
    });
};

exports.NoDataCheck = (data) => {
  let output;
  if (data != undefined && data != TypeError) {
    try {
      console.log(data[1]);
      output = data[1];
    } catch (err) {
      // console.log(err);
      // console.log(data);
    }
  }
  return output;
};

exports.checkRateLimit = (num) => {
  //if limit is a whole number, then rate limit hit, setTimeout to wait for RPM reset
  let limit = num / 55;
  if (Number.isInteger(limit) & (num != 0)) {
    setTimeout(() => {
      console.log("In timeout");
    }, 1000);
    return true;
  } else {
    return false;
  }
};
