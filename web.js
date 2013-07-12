                
                                                                                           
                                                              
var express = require('express');

var fs =  require('fs');

var app = express.createServer(express.logger());

var read = fs.readFileSync("iindex.html");

var buffer = new Butter(read);

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
