function range(start, end, step) {
  step = (step || 1);
  var array = [];
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
  }
  else if (step < 0) {
    for (var i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

console.log(range(1, 10));
console.log(range(10, -10, -2));

function sum(array) {
  if (Array.isArray(array)) {
    var sum = array[0];
    for (var i = 1; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  else {
    return null;
  }
}

console.log(sum([1,2,3,4]));
