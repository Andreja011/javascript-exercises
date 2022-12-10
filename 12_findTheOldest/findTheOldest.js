const findTheOldest = function (arr) {
  const oldest = arr.sort(function (a, b) {
    const currentYear = new Date().getFullYear();
    arr.forEach((people) => {
      return (people.yearOfDeath ??= currentYear);
    });
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
