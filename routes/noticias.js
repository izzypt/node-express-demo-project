module.exports = (app) => {

    app.get("/noticias", (req, res) => {
    
        let connection = app.dbConnection();
        let noticiasModel = new app.models.noticiasModel;

        noticiasModel.getNoticias(connection, (error, result) =>{
            res.render("../views/noticias/noticias", {noticias : result});
        })
    })
}; 