const jwt = require('jsonwebtoken')
const {  User } = require("../database/models/UsersModel.js");
async  function verifyAuth(req,res,next){
    try{
        const token = req.cookies.Authorization;
        console.log('The Token ==> ',token)
        var decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log('The Token ==> ',decoded)
        const findUser = decoded.user
        
    if(!findUser) return res.status(401).send('user not found')

   else {
  
    console.log("find user",findUser )
    req.findUser = findUser
    console.log('user',findUser)
   }
next()
    }catch(err){
        return res.sendStatus(401)
    }
}

module.exports = verifyAuth ;