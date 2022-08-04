const mysql = require('mysql')

let connMySQL = function(){
    console.log("Conection to DB established.")
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias'
    });
}

module.exports = () => {
    console.log("Loaded DB module.")
    return connMySQL;
}