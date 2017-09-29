var ls=require('modulefonction.js');

var dirPath = process.argv[2];
var extFile = process.argv[3];

ls(dirPath,extFile,function(err,data)){
if(!!err){
console.error(err);
return;
}
//data.forEach(console.log);
console.dir(data);
});
