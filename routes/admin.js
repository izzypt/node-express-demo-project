module.exports = (app) => {

    app.get("/formulario_inclusao", (req, res) => {
        res.render('admin/form_add_noticia');
    })

    app.post("/noticias/salvar", (req,res) =>{
        let noticia = req.body
        let noticiasModel = new app.models.noticiasModel;
        let connection = app.dbConnection();

        noticiasModel.gravarNoticia(noticia, connection, (error, result) =>{
            res.redirect("/noticias")
        })
    })

}