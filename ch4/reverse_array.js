function reverseArray(oldArray) {
  newArray = [];
  for(var i = oldArray.length-1; i >= 0; i--) {
    newArray.push(oldArray[i]);
  }
  return newArray;
}

console.log(reverseArray([-1, 0, 1, 2, 3, 4, 5]));

function reverseArrayInPlace(array) {
  for(i = 0; i < array.length - 1; i++){
    array.splice(i, 0, array.pop());
  }
  return array;
}

console.log(reverseArrayInPlace([-1, 0, 1, 2, 3, 4, 5]));
