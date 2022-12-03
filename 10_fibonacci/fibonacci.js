const fibonacci = function (num) {
  if (num === 1) {
    return Number(num);
  } else if (num <= 0) {
    return "OOPS";
  }

  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }

  return Number(result[result.length - 1]);
};

// Do not edit below this line
module.exports = fibonacci;
