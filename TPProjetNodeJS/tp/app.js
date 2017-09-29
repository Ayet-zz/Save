'use strict';
//initialisation de js
var express=require("express"); 
var app=express();
//initialisation du serveur web
var http=require ("http");
var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var server = http.createServer(app);
server.listen(CONFIG.port,function(){
	var host = this.adress().address;
	var port = this.adress().port;
	console.log(" Serveur ecoute à l'adresse \""+host+":"+port+"\"");
})

/*// Route par défault
var defaultRoute = require("./app/routes/default.route.js");
app.use(defaultRoute);

// 	Send it works on /
// #2
app.get("/", function(request, response) {
	response.send("It works !");
});
*/
// Send aguero.. on index.html
var path = require ("path");

app.use("/index.html", express.static(path.join(__dirname, "public")));

//initialisation fs

var fs=require('fs');

//creation de loadpres
app.use("/loadPres",function(request, response, cb) {
	
	fs.readdir(CONFIG.presentationDirectory,function(err,files)
	{
		if(!!err)
		{
			console.error(err);
			return;
		}
			var json={};
			files.forEach(function(err,file){
				if(!!err)
				{
					console.error(err);
					return;
				}
				if(path.extname(file)==".json")
				{
				var cle=""
				var valeur="";
					JSON.parse(file,(key,value)=>{
						if(key=="id")
							cle=value;
						if(key=="slidArray")
							valeur=value;
					});
				json[cle]=valeur;

				
				}
				cb(json);

		});
		


	});*/

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