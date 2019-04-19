const fs = require("fs");
const querystring = require("querystring");
const path = require("path");
const words = fs
  .readFileSync(path.join(__dirname, "..", "word.txt"), "utf-8")
  .split(/\n/);

const handlerHome = (request, response) => {
  const endpoint = request.url;
  response.writeHead(200, { "content-Type": "text/html" });
  const filepath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filepath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("404 - FILE NOT FOUND");
      return;
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const handlerPublic = (request, response) => {
  const url = request.url
  const extension = url.split('.')[1];
  const filepath = path.join(__dirname, '..', 'public', url);
  const type = {
    htm: 'text/html',
    js: 'application/javascript',
    css: 'text/css'
  }[extension]

  fs.readFile(filepath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, {'Content-Type': 'text/plain'})
      response.end('404 - FILE NOT FOUND');
      return;
    }
    response.writeHead(200, {'Content-Type': type});
    response.end(file);
  });
}

// const handlerPublic = (request, response, url) => {
//     const extention = url.split('.')[1];
//     const extentionTypes = {
//         html: 'text/html',
//         js: 'application/javascript',
//         css: 'text/css',
//     };
//     const filePath = path.join(__dirname, '..', url);
//     fs.readFile(filePath, (error, file) => {
//       if (error){
//         console.log(error);
//         response.writeHead(404, {'Content-Type': 'text/html'});
//         response.end('<h1>soooo sorry... I can\'t find this file...</h1>');
//     } else {
//       response.writeHead(200, { 'Content-Type': extensionTyps[extension] });
//       response.end(file);
//     }
//   });
// };
const handlerSearch = (request, response) => {
  const endponit = request.url;
  // console.log(words);
  const result = words.filter(el => el[0] === "A");
  console.log(result);
  // response.writeHead(200, { 'content-Type' : 'text/html'});
  // const filepath = path.join(__dirname, '..', 'public', 'word.txt')
  // fs.readFile(filepath, (error, file) => {
  //   if (error) {
  //     console.log(error);
  //     response.writeHead(404, {'Content-Type': 'text/plain'});
  //     response.end('404 - FILE NOT FOUND');
  //     return;
  //   }
};

module.exports = {
  handlerHome,
  handlerPublic,
  handlerSearch
}
