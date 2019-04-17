const http = require('http');
const handler = require('./handler');


const server = http.createServer(handler);

server.listen(4000, function(request, response) {
  console.log("Server is listening on port 4000. Ready to accept requests!");
});
