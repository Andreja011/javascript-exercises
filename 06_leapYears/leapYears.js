const leapYears = function (year) {
  const divByFour = year % 4 === 0;
  const divByHundred = year % 100 === 0;
  const divByFourHundred = year % 400 === 0;
  if (divByFour && divByHundred && divByFourHundred) {
    return true;
  } else if (divByFour && divByHundred) {
    return false;
  } else if (divByFour && !divByHundred) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
