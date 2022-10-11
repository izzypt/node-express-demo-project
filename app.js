/*******************/
/* --- IMPORT --- */
/*****************/
const app = require('./server.js')
const PORT = 3000;


/***************/
/* RUN SERVER */
/*************/
app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}...`)
});