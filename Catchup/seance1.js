'use strict';
//console.log('It Works !');
var fs = require("fs");

var http = require("http");
var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);


var express = require("express");

var app = express();

// init server
var server = http.createServer(app);
server.listen(CONFIG.port, function() {
	var host = this.address().address;
	var port = this.address().port;
	console.log ( "Serveur écoute à l'adresse \""+host+":"+port+"\"");
});

//var defaultRoute = require("./app/routes/default.route.js");

//app.use(defaultRoute);

// #2
/*
app.get("/", function(request, response) {
	response.send("It works !");
});

// #3
app.use(function(request, response, cb) {
	response.send("It works !");
	cb();
});
*/
var path = require("path");
//console.log(path);
app.use("/index", express.static(path.join(__dirname, "public")));


app.use(function(request, response) {

	var dir = CONFIG.presentationDirectory;
	 // Read the directory
  	fs.readdir( dir,function (err, list) {
    // Return the error if something went wrong
    if (err)
      return console.error(err);

  	var allPres="";
  	var obj={};
  	var i =0;
 	var nbFichier= list.length;
 	console.log(nbFichier);

    // For every file in the list
    list.forEach(function (file) {

    	i++; //compteur
    	


    	fs.readFile((dir+"/"+file),function(err,data){
    		if(!!err)
    			return console.error(err);


    		var pres = JSON.parse(data);
    		var id = pres.id;
    		obj[id]=pres;
    		console.log(pres);
    		console.log(id);
    		console.log(obj);
    		

    		
    		if(i==nbFichier)
    		{

    			console.log(i);
    			//response.send(JSON.stringify(obj));//.toString());
    		}


    		//return data;

    	});


    });
	

});
	
},express.static(path.join(__dirname, "loadPres")));


/*


'use strict';

funtcion UserModel (user) {
	
	this.name= (user && user.name) ? user.name:null;
	var age;
	this.getAge=function{...};
	this.setAge=function{...};
}


UserModel.create=function(userModel,cb){
	todo

	
	cb();	
};