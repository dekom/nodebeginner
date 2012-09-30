var server = require("./server")
,   router = require("./router")
,   request_handler = require("./request_handler")
,   handle = {};

handle["/"] = request_handler.start;
handle["/start"] = request_handler.start;
handle["/upload"] = request_handler.upload;

server.start(router.route, handle);
