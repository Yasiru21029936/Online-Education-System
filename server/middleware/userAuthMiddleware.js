const jwt = require('jsonwebtoken'); //generates a token 
const asyncHandler = require('express-async-handler')
const userCollection = require('../models/Users');//model

const protect = asyncHandler(async(req,res,next) =>{      //check whether the user is autherized from the system
    let token 
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){  //take the jw token from the users cokkies 
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1]; //split means take the token splited into 2 parts
            // verift the token
            const decoded = jwt.verify(token,process.env.JWT_SECRET) //decode the token from the decryption key
            // console.log(decoded.id);
            // get user from the token without password
            req.user = await userCollection.findById(decoded.id).select('-password') //check the user from the databse whether the inserted username and password is correct
            next()
        } catch (err) { 
            console.log(err)
            res.status(401).send({status:'User not authorized'}); //if the password is wrong
        }
    }

    if(!token){
        res.status(401).send({status:'Not authorized no token'}); //if the credintials aren't in the database. (unauthorized user)
    }

})

module.exports = {protect}