//import server and configurations from server file
const app = require('./config/server.js')

//Set server to listen on port 3000
app.listen(3000, () => {
	console.log("Server running on port 3000")
	}
)