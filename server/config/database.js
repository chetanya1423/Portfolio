const mongoose = require('mongoose')
require('dotenv').config
exports.connect = () =>{
    mongoose.connect("mongodb+srv://chetanyapathak6:Qp4ny7OPT2uELWFC@chetanya.bwl3plx.mongodb.net/PortFolioBackend",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB Connection Successful"))
    .catch(  (error) => {
        console.log("DB Connection Issues");
        console.error(error);
        process.exit(1);
    } );
}