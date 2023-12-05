const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobileNo:{
type:Number,
require:true
    },
    comment:[
        {
            type:String,
            require:true
        }
    ]
})

module.exports = mongoose.model("user", userSchema)