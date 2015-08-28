// if divisible by 3 - Fizz
// if divisible by 5 - Buzz
// if both - both

for (var i = 1; i <= 100; i++) {
  var output = "";
  if (i % 3 === 0)
    output += "Fizz";
  if (i % 5 === 0)
    output +="Buzz";  
  console.log(output || i);
}
