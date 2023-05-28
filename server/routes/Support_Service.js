const router = require('express').Router();
const Support_Service = require('../models/Support_Service');


router.route("/").get(async (req,res) =>{
    await Support_Service.find().then((data) =>{
         res.status(200).send({status :" Data Recieved",Support_Service : data});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

 router.route("/Ticket").post(async (req,res) =>{
    const {name, email, registrationNumber, school, nic, contactNumber, requestType, moduleName, moduleCode, message } = req.body;
    const Ticket = new Ticket({
        name,
        email,
        registrationNumber,
        school,
        nic,
        contactNumber,
        requestType,
        moduleName,
        moduleCode,
        message,


    })

    await Ticket.save().then(()=>{
        res.status(200).send({status:"New Ticket Added"})
    }).catch((e)=>{
        res.status(400).send({status : e})
        // console.log(e)
    })
})
 module.exports = router;