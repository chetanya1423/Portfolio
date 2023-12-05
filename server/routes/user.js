const express = require("express");
const router = express.Router();

const {sendMessage} =require('../controller/auth')
router.post("/sendmessage",sendMessage)



module.exports = router;