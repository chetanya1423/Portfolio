
const userSchema = require('../models/signInSchema')
const emailTemplate = require("../mailTemplate/emaiTemplate")
require("dotenv").config()
exports.sendMessage = async(req,res) =>{
try{
const {fullName,email,mobileNo,comment} = req.body;
// const checkEmailPresent = await userSchema.find({email});
// if(checkEmailPresent){
//   const upadateComment = await userSchema.findOneAndUpdate({email},{$push:{
//     comment:comment
//   }});
//   console.log(upadateComment.comment)
// }

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: `${process.env.MAIL_HOST}`,

  secure: false,
  auth: {
    user: `${process.env.MAIL_USER}`,
    pass: `${process.env.MAIL_PASS}`,
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: `${email}`, 
    to: `${process.env.MAIL_USER}`, 
    subject: "Portfolio ✔",
    html: `${emailTemplate(fullName,email,mobileNo,comment)}`, 
  });


}

main().catch(console.error);



const message = await userSchema.create({
  fullName,
  email,
 mobileNo,
 comment
})


return res.status(200).json({
    success: true,
    
    message: "User registered successfully",
  })
}
catch(err){
console.log(err)
}
}