const fs = require('fs');
const path = require('path');


const handler = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    response.writeHead(200, { 'content-Type' : 'text/html'});
  const filepath = path.join(__dirname, '..', 'public', 'index.html')
  fs.readFile(filepath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('404 - FILE NOT FOUND');
      return;
    }
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end(file);
  });
}
};
//
// const handlePublic = (request, response, url) => {
//   const
// }



module.exports = handler
