const {
  handlerHome,
  handlerSearch,
} = require ('./handles.js')

const router = (request, response) => {
  const endpoint = request.url;


if (endpoint === "/") {
  handlerHome(request, response);
} else if (endpoint === "/search") {
  handlerSearch(request, response);
}


};
