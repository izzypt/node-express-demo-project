 module.exports = (app) => {

	app.get("/noticia", (req, res) => {

		let connection = app.config.dbConnection()

	 	connection.query('select * from noticias where id_noticias = 1', (err, result) => {
	 		res.render("noticias/noticia_detail.ejs", {noticia : result});
	 	})
	});
};