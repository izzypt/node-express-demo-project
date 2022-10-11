/*******************/
/* --- IMPORT --- */
/*****************/
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

/***********************/
/* --- INITIALIZE --- */
/*********************/
const app = express() //initialize express server

/*********************/
/* --- SETTINGS --- */
/*******************/
app.set('view engine', 'ejs'); //set view engine to ejs

app.use(bodyParser.urlencoded({extended: true})),

consign() //autoload the scripts above with consign once the server starts
    .include('routes')
    .then('dbConnection.js')
    .then('models')
    .into(app) 

/*******************/
/* --- EXPORT --- */
/*****************/
module.exports = app; //export app, we will import it in app.js