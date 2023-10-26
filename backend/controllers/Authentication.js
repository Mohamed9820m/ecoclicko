const {  User } = require("../database/models/UsersModel");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
module.exports = {

  logIn: async (req, res) => {
    const { userEmail, userPassword } = req.body;

     try{ 
        const userWithEmail = await User.findOne({ where: { userEmail } })

      if (!userWithEmail){
        return res.status(409).send({ message: "Email or password does not match!" });
      }

    else {
        const comparedPassword = bcrypt.compareSync(userPassword , userWithEmail.userPassword)
    
         if (!comparedPassword){
            return res.status(409).send({ message: "Email or password does not match!" });
          }else {

        console.log(process.env.JWT_SECRET)
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
         const jwtToken = jwt.sign(
    
          {user:userWithEmail},
        process.env.JWT_SECRET
      );
      console.log("jwt",jwt)
      const options= {
        expires: new Date(exp),

        httpOnly: true,
        sameSite: "lax"
      }
       res.cookie("Authorization", jwtToken, options);

      res.send({ message: "Welcome Back!", token: jwtToken,userWithEmail });}}
         }
         catch(error){
            console.log (error)
        }
  },
  signUp: async (req, res) => {
    console.log("hi");

        const { userName, userEmail, userPassword } = req.body;

        try {
        const alreadyExistsUser = await User.findOne({ where: { userEmail } })
      console.log(alreadyExistsUser)

        if (alreadyExistsUser) {
          return res.status(409).send({ message: "User with email already exists!" });
        }
  
        else {
          
          const hashedPassword = bcrypt.hashSync(userPassword,8);
        const newUser = new User({ fullName, userEmail, userPassword:hashedPassword });
       const user = await newUser.save()
        res.status (200).send(user)
      }
      }   catch(error){
        console.log (error)
      }
  
},

  signOut: async (req, res) => {
    try {
      res.clearCookie("Authorization")
        res.status(200).json(" to the next login !");
          }catch (err) {
          return res.sendStatus(400);
        }
  },
  checkAuthUser( req,res){
    console.log("Check the user ==> ",req.findUser)
    try{
      res.status(200).send(req.findUser);
    } catch (err){
      return res.sendStatus(400);
    }
  }
}