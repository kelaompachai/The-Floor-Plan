// this file is the entry point for the server
const path = require('path');

// get express and body parser
const express = require('express');
const bodyParser = require('body-parser');

// create app
const app = express();


// set PORT
const PORT = 3000;

// require in the routers
const router = require('./routes/router');
const authRouter = require('./routes/authRouter');

// parse incoming urlencoded information
app.use(bodyParser.urlencoded());

// parse incoming request body
app.use(express.json());

// redirect requests for the root file to login page
app.get('/', (req, res) => res.redirect('/auth.html'));

// serve static files
// serve index.html and styles.css when get request is made to root url
// app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
// serve bundle.js when it is requested by index.html
// app.use('/dist', express.static(path.join(__dirname, '..', '..', 'dist')));


app.use('/data', router);

// working on a route for authentication page
app.use('/users', authRouter);

// serve the bundle.js file when it is requested from the index.html
// app.get('/dist/bundle.js', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '..', '..', 'dist', 'bundle.js'));
// });

// every request that was not previously handled should receive a 404 response
app.use((req, res) => {
  // res.write('Cannot find requested file.');
  res.status(404).send('Cannot find requested file of Floor Plan.');
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
