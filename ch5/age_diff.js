// run in eloquent javascript code sandbox


var haveMothers = ancestry.filter(function(person) {
  return byName[person.mother];
});

var relativeAgeOfMother = haveMothers.map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(relativeAgeOfMother));
