 module.exports = (app) => {

	app.get("/noticias", (req, res) => {

	 	var mysql = require('mysql')

	 	var connection = mysql.createConnection({
	 		host : 'localhost',
	 		user : 'root',
	 		password : '1234',
	 		database : 'portal_noticias'
	 	})

	 	connection.query('select * from noticias', (err, result) => {
	 		res.render("noticias/noticia", {noticias : result});
	 	})
	});
};