// this file makes a port on my local machine listen for get
// requests on port 3000 and responds to the requests
// with the file at ./client/index.html

// first, I need to get the built in modules from node
// const http = require('http');
// const fs = require('fs');
const path = require('path');

// get express and create an app
const express = require('express');

const app = express();

// set PORT
const PORT = 3000;

// console.log('express: ', express);
// console.log('app: ', app);
// console.log(app.listen);
// console.log(app.listen.call);

// serve static files
// serve index.html and styles.css when get request is made to root url
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

/*
// define a function that will dictate how the server responds to requests
const requestListener = (req, res) => {
  // input: two objects, the request object and the response object
  // output: not sure it matters??
  // side-effects: send the response object to the client that sent the request object

  // if the request is a get request for the base path that
  // the server is listening on, serve the index.html
  if (req.method === 'GET' && req.url === '/') {
    // write 200 to the response header and set the content type header to text/html
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // use readFileSync to get the index.html data and pass it
    // into the end method on the response object
    return res.end(fs.readFileSync(path.join('.', 'client', 'index.html'), 'utf-8'));
  } else { // set up a 404 not found response for all others
    res.writeHead(404);
    return res.end();
  }
};
*/

// every request that was not previously handled should receive a 404 response
app.use((req, res) => {
  // res.write('Cannot find requested file.');
  res.status(404).send('Cannot find requested file.');
});

// global error handler
app.use((err, req, res, next) => {
  // declare a default error
  const defaultError = {
    log: 'An error occured.',
    status: 500,
    message: { err },
  };

  // replace the default error with the specific error information if it is available
  const error = {
    ...defaultError,
    ...err,
  };

  // write the error to the server's console
  console.log(error);

  // send a response back to the client
  res.status(error.status).json(error.message);
});

// make the server listen on port 3000
app.listen(PORT, () => {
  console.log('Listening on port 3000.');
});
