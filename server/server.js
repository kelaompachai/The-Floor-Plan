// this file makes a port on my local machine listen for get requests on port 3000 and responds to the requests
// with the file at ./client/index.html

// first, I need to get the built in http module from node
const http = require('http');
const fs = require('fs');
// console.log(http);
// console.log(fs);

fs.readFile('hello.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log('cheese');
});
// console.log(index);

// next, use the createServer method on http to create a server
// const server = http.createServer();

// set the server to send back the index.html when I navigate to localhost:3000



// make the server listen on port 3000
// server.listen(3000, () => { console.log('Listening on port 3000.'); });
