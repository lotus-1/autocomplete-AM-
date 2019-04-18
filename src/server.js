const http = require("http");
const router = require("./router");

const server = http.createServer(router);

server.listen(4000, function(request, response) {
  console.log("Server is listening on port 4000. Ready to accept requests!");
});
