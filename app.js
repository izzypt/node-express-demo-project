//import server and configurations from server file
const app = require('./config/server.js')

//import routes from router folder
const newsRoute  = require('./app/router/noticias.js')
newsRoute(app);

const homeRoute = require('./app/router/home.js')
homeRoute(app);

const addNewsForm = require('./app/router/formulario_inclusao_noticia.js')
addNewsForm(app)

//Set server to listen on port 3000
app.listen(3000, () => {
	console.log("Server running on port 3000")
	}
)