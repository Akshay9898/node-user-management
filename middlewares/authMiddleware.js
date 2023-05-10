const express = require('express')
const User = require('../models/User')

const userValidate = async (req,res, next) => {
    try{
        const username = await User.findOne({
            where:{
                name: req.body.name
            }
        })

        if (username){
            return res.send({message:"username already exist"})
        }

        const emailCheck = await User.findOne({
            where:{
                email: req.body.email
            }
        })

        if (emailCheck) {
            return res.send({message:"Email ID already exist"})
        }

        next()
    } catch(error){console.log(error)}
}

module.exports = userValidate