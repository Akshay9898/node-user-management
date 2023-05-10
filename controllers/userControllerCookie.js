const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const secret_key = require('../config/constants')
const pug = require('pug')

const signUp = async (req,res) => {
    try{
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password,10)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
        let token = jwt.sign({ id: user.id }, secret_key, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
    });

    res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
    console.log(token);
    const { password: _, ...userWithoutPassword } = user.toJSON();
    return res.status(201).send(userWithoutPassword);
   } 
   
   else {
     return res.status(409).send("Details are not correct");
   }
 } catch (error) {
   console.log(error);
 }
}

const loginAuth = async (req,res) => {
  try{
    
    const{email,password} = req.body
    const user = await User.findOne({
      where:{
        email:email
      }
    });

    if (user){
      const isSame = await bcrypt.compare(password,user.password)

      if (isSame){
        let token = jwt.sign({ id: user.id }, secret_key, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log(token);

      return res.status(201).send({token:token});

      }
      else{
        return res.status(401).send("Authentication failed");
      }
    }
    else{
      return res.status(401).send("Authentication failed");
    }

  }catch (error) {
    console.log(error);
  }
  
}

module.exports = {
  signUp,
  loginAuth
}