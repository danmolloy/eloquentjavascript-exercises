function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = prepend(array[i], list);
  }
  return list;
}

function listToArray(list, arr) {
  var array = (arr||[]);
  array.push(list.value);
  if (list.rest === null) {
    return array;
  }
  else {
    return listToArray(list.rest, array);
  }
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function nth(list, position) {
  if (!list)
    return undefined;
  if (position === 0)
    return list.value;
  else
    return nth(list.rest, position - 1);
}


var testlist = arrayToList([0,1,2,3,4]);
console.log(testlist);
var testarray = listToArray(testlist);
console.log("result is: " + testarray);

console.log(nth(testlist, 2));
