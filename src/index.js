// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let coins = [
    { name: "H", value: 50},
    { name: "Q", value: 25},
    { name: "D", value: 10},
    { name: "N", value: 5},
    { name: "P", value: 1},
  ];
  if (currency > 10000) {
    return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'}
  }
  let result = {};
  coins.reduce(function (res, current) {
    let div = Math.floor(res / current.value);
    if (div >= 1) {
      result[current.name] = div;
      res -= (current.value * result[current.name]);
    }
    return res;
  }, currency)
  return result;
}
