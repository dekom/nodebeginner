var http = require("http")
,   url = require("url")
,   router = require("./router");

function start(route, handle) {
  // Asynchronous callback function to handle requests
  function onRequest(request, response) {
    var postData = ""
    ,   pathname = url.parse(request.url).pathname;
    console.log("Request for" + pathname + " recieved.");

    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start; // Turn this into a module
