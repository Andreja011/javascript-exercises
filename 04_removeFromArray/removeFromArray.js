const removeFromArray = function (arr, ...itemsToRemove) {
  return arr.filter((x) => !itemsToRemove.includes(x));
};
// Do not edit below this line
module.exports = removeFromArray;
