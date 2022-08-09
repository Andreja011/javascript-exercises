const ftoc = function (fTemp) {
  const celsiusTemp = Math.round(((fTemp - 32) / 1.8) * 10) / 10;
  return celsiusTemp;
};

const ctof = function (cTemp) {
  const fahrenheitTemp = Math.round((cTemp * (9 / 5) + 32) * 10) / 10;
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
