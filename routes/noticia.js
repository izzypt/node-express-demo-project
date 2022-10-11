module.exports = (app) => {

    app.get("/noticia", (req, res) => {
    
        let connection = app.dbConnection()

        connection.query('select * from noticias where id_noticia = 2;', (error, result) =>{
            res.render("../views/noticias/noticia", {noticias : result});
        })
    })
}; 