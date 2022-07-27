const reverseString = function (string) {
  const arr = [...string];
  const reversedArr = arr.reverse();
  const reversedArrStr = reversedArr.join("");
  return reversedArrStr;
};

// Do not edit below this line
module.exports = reverseString;
