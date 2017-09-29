const fs=require('fs');

function read(file, cb)
{
var content = fs.readFile(file, function(err,data){
if(!!err)
{
console.error(err);
cb(err);
return;
}
cb(null,data.toString().split(/\r|\n|\r|\n/).length);
});
}

read(process.argv[2], function(err,data)
{
if(!!err)
{
console.error(err);
return;
}
console.log(data);
});
