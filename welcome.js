const http = require('http');
  const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.end("What is your name?")
   });
   server.listen(3000, () =>{
    console.log("server is running");
   })