var http= require('http');
var CONFIG=require('./config.json');

var server= http.createServer(function(request,response){
});

server.listen(CONFIG.port,function )