var fs = require('fs)');
var path = require('path');

var dirPath = process.argv[2];
var extFile = process.argv[3];

fs.readdir(dirPath, function(err,data){
	if(!!err)
	{
		console.error(err);
		return;
	}
			

			data.forEach(function(fileName)
			{
				if(path.extname(Filename)==="."+extFile){
					console.log(Filename);
				}
			}

			});
});


