function every(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (!test(array[i]))
      return false;
  }
  return true;
};

function some(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      return true;
  }
  return false;
};

function isBigEnough(element) {
  return element >= 10;
}

console.log(every([12, 5, 8, 130, 44], isBigEnough));
console.log(every([12, 54, 18, 130, 44], isBigEnough));

console.log(some([12, 5, 8, 130, 44], isBigEnough));
console.log(some([12, 54, 18, 130, 44], isBigEnough));
console.log(some([2, 4, 8, 1, 4], isBigEnough));
