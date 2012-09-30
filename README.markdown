# Node Beginner #
[Beginning tutorial for JavaScript and NodeJS](http://www.nodebeginner.org)

This contains the scripts created in the book.

## The Application Stack ##
We're looking to create a complete web application. The parts we'll need are:

* HTTP Server: serve web pages
* Router: map requests to request handlers
* Request handlers: fulfill requests
* Request data handling: treat incoming POST data and pass to request handlers
  in a convenient form
* View logic: create display content and send to user's browser
* Upload handling: take care of the details of handling (image) uploads

## Building the Application Stack ##

Separate the logic of the application using separate files and load into the
`main` through modules.

### Event-driven Asynchronous Callbacks ###

Node.js execution model only uses one single process.  Therefore, any slow
function calls results in massive slowdown within the entire process.
Therefore, JavaScript and Node.js uses the concept of *event-driven,
asynchronous callbacks* using an event loop.

As long as a function belongs to the asynchronous library, it calls the
function with the passed in callback function.  Once the code has been
executed, Node.js enters the event loop, where it cycles waiting for events.

#### Understanding Node.js ####
Source:
http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb

*Eveything (in Node.js) runs in parallel, except your code.* This is, all
system code is executed in parallel, but all of your callback functions are
executed in queue, although the order within the queue is not defined.  In
other words, no two function can access the same data structure at the same
time.

For example, "in a web application, your main response time cost is usually
the sum of time it takes to execute all your database queries.  With node, you
can execute all your queries at once, reducing the response time to the
duration it takes to execute the slowest query." In this example, the
execution of the query is done in parallel, while the callback functions
passed into the query calls are passed back sequentially (I think that's what
it means?).

Node is really good with *low response times and high concurrency*.
