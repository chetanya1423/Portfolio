
const express = require('express')
const cors = require("cors");
const sendMessage = require('./controller/auth')
const app = express();
require("dotenv").config()
port = process.env.PORT || 3001


app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
 require('./config/database').connect()


 // Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});


const user = require('./routes/user')

app.use('/api/v1',user)

app.listen(port,()=>{
    console.log("listen ho rha h")
})



