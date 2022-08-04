 module.exports = (app) => {

	app.get("/noticias", (req, res) => {

		let connection = app.config.dbConnection()

	 	connection.query('select * from noticias', (err, result) => {
	 		res.render("noticias/noticia", {noticias : result});
	 	})
	});
};