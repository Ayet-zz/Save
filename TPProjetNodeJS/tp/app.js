'use strict';
//initialisation fs
var fs=require('fs');
//initialisation de js
var express=require("express"); 
var app=express();
//initialisation du serveur web
var http=require ("http");
var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var server = http.createServer(app);
server.listen(CONFIG.port); /*,function(){
	var host = this.adress().address;
	var port = this.adress().port;
	console.log(" Serveur ecoute à l'adresse \""+host+":"+port+"\"");
})*/

// Route par défault
var defaultRoute = require("./app/routes/default.route.js");
app.use(defaultRoute);

// 	Send it works on /
// #2
app.get("/", function(request, response) {
	response.send("It works !");
});

// Send aguero.. on index.html
var path = require ("path");

app.use("/index.html", express.static(path.join(__dirname, "public")));


//creation de loadpres
app.use("/loadPres",function(request, response,cb) {
	
	var directory= CONFIG.presentationDirectory;
	var maMap= new Map();
	fs.readdir(directory,function(err,files)
	{
		var longueur=files.length;

		if(!!err)
		return console.error(err);
			var i=0;	
			files.forEach(function(file){	

				var fileext=path.extname(file);
				if(fileext==".json")
				{
				
				fs.readFile((directory+"/"+file),function(err,data){
					if(!!err)
	    				return console.error(err);
					var parsed = JSON.parse(data);
					var cle= parsed.id;
					var valeur=parsed.slidArray;
					maMap[cle]=valeur;
					i=i+1;
					console.log(longueur);
					console.log(i);
					if(longueur==i)
					{
						response.send(maMap);
						cb(maMap);
					}

					
					/*response.send(maMap);
					response.end();*/

						});
					
				
				}
				else{
						i=i+1;
				}
			
		});
	


	});

});
//to create fonction model question 14
/*
'use strict'
module.exports = UserModel;

function UserModel(user){
	this.name = (user && user.name )? user::null;
	var age
	this.getAge = function(){...}
	this.setAge = function{...}

}
UserModel.create = function(userModel,function(err,data){
	
	cb();
});
{
	
	name: 'tot',
	'tata':'toto',
}

*/
// to use it
/*
var UserModel=require('UserModel');
var user=new UserModel();

UserModel.create(user,function(err,data){})

*/