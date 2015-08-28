var bumpyArray = [[1, 2, 3], [4, 5], [6]];

var flatArray = bumpyArray.reduce(function(flat, current) {
  return flat.concat(current);
});

console.log(flatArray);
