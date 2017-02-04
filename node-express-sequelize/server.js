var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});
app.get('/users',function(res,req){
	User.select('*').then(function(users){
		if(users.length!==0){
		   res.status(200).send(users)	
		}else{
           res.status(500).send("no users in db!")
		}
		
	})
	

})
//another why.....
app.get('/users',function(res,req){
	User.fetch().then(function(users){
		if(users.length!==0){
		   res.status(200).send(users)	
		}else{
           res.status(500).send("no users in db!")
		}
		
	})
	

})
/*  Create a '/users' route that responds to 
    a GET request with all users in the database */



module.exports = { 
  app: app,
  User: User
};
