var fs = require('fs)');
var path = require('path');

module.exports= function(dirPath,extname,cb){
var listFile= [];

fs.readdir(dirPath, function(err,data){
	if(!!err)
	{
		console.error(err);
		return;

	}
for (var i in data){
var = fileName = data[i];
if(path.extname(Filename)==="."+extFile){
				listFile.push(fileName);
				}
}

return cb(null,listFile);
			});
}


