const sumAll = function (start, end) {
  if (typeof start !== "number" || typeof end !== "number") {
    return "ERROR";
  }
  let max = Math.max(start, end);
  let min = Math.min(start, end);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  if (sumBetween > 0) {
    return sumBetween;
  } else if (sumBetween < 0) {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
