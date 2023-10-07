// this file makes a port on my local machine listen for get requests on port 3000 and responds to the requests
// with the file at ./client/index.html

// first, I need to get the built in modules from node
const http = require('http');
const fs = require('fs');
const path = require('path');

const express = require('express');


/*
// define a function that will dictate how the server responds to requests
const requestListener = (req, res) => {
  // input: two objects, the request object and the response object
  // output: not sure it matters??
  // side-effects: send the response object to the client that sent the request object

  // if the request is a get request for the base path that the server is listening on, serve the index.html
  if (req.method === 'GET' && req.url === '/') {
    // write 200 to the response header and set the content type header to text/html
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // use readFileSync to get the index.html data and pass it into the end method on the response object
    return res.end(fs.readFileSync(path.join('.', 'client', 'index.html'), 'utf-8'));
  } else { // set up a 404 not found response for all others
    res.writeHead(404);
    return res.end();
  }
};
*/

// next, use the createServer method on http to create a server
const server = http.createServer(requestListener);

// make the server listen on port 3000
const PORT = 3000;
server.listen(PORT, () => { console.log('Listening on port 3000.'); });
