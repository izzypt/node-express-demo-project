//import express
const express = require('express');

//create app instance from express
const app = express();

//setup view engine (ejs) to render templates
app.set('view engine', 'ejs');

//defining default folder where the app should look for views.
//Start writing the path from the folder where this module is being used (app.js file)
app.set('views','./app/views')

//export module
module.exports = app;

