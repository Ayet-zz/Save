/*setTimeout(function(){
console.log('World');
},1000);
console.log('Hello')
setInterval(function(){
console.log('World');
},1000);
console.log('Hello');*/

var http=require("http");
http.createServer(function(request,response){
response.writeHead(200,{"content-type":"text/plain"});
response.end("hello world\n");
}).listen(99999);
