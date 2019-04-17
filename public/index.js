// var fs = require('fs');
// var filename = __dirname + '/words.txt';
//   fs.readFile(filename, 'utf8', function (err, data) {
//     ac.words = data.split('\n');
//     return callback(err, ac.words);
//   });
// }
document.getElementById("search").addEventListener("keyup", function(event) {
  event.preventDefault();

  fetch("/search")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
});
