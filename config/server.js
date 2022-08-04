//import express
const express = require('express');
//import consign to help us manage our routes
const consign = require('consign')

//create app instance from express
const app = express();

//include/auto-load the routes we created into that app instance (to avoid listing all the routes in app.js file)
//Starting point for the path is the file from where this app is running (app.js)
//Also, include and auto-load the dataBase connection configurations.
consign()
	.include('app/router')
	.then('config/dbConnection.js')
	.into(app)

//setup view engine (ejs) to render templates
app.set('view engine', 'ejs');

//defining default folder where the app should look for views.
//Start writing the path from the folder where this module is being used (app.js file)
app.set('views','./app/views')

//export module
module.exports = app;

