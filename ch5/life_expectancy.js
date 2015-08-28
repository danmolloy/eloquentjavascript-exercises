// Compute and output the average age of the people in the ancestry
// data set per century. A person is assigned to a century by taking
// their year of death, dividing it by 100, and rounding it up, as in
// Math.ceil(person.died / 100) .

// For bonus points, write a function groupBy that abstracts the
// grouping operation. It should accept as arguments an array and a
// function that computes the group for an element in the array and
// returns an object that maps group names to arrays of group
// members.

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}
