var test = require('tape');
//var ac = require('index.js');

test('Testing tape', function(t) {
  t.equal(1, 1, "tape is working");
  t.end();
});

var letter = "C";
test('findAnimal() finds a string in words array', function(t){
  var actual = '/.index.js'.findAnimal(letter);
  var expected = ["Cat", "Cattle", "Canidae"];
  t.deepEqual(actual, expected, 'Search for C found');
 t.end();
});
