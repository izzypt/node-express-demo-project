class Noticias {
    constructor() {
    }
    getNoticias(connection, callback) {
        connection.query('select * from noticias', callback);
    }
    gravarNoticia(noticia, connection, callback) {
        connection.query("INSERT INTO noticias SET ?", noticia, callback);
    }
}



module.exports = function() {
    return Noticias;
}