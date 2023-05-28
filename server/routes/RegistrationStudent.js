const router  = require('express').Router();
const RegistrationStudent = require('../models/RegistrationStudent');

router.route("/").get(async (req,res) =>{
    await RegistrationStudent.find().then((student) =>{
         res.status(200).send({status :" Data Recieved",studentRegistration : student});
     }).catch((err)=>{
         res.status(400).send({status :err})
     })
 })

router.route("/StudentRegistration").post(async(req,res) => {
    const{fName, lName, nameWithInitials,NIC, Gender, DOB, Email, MNumber, MWNumber, AddressLine01, AddressLine02, City, School, GName, GOccupation, GContact, Username, Password, CPassword} = req.body;
    const newStudent = new RegistrationStudent({
        fName, 
        lName, 
        nameWithInitials,
        NIC, 
        Gender, 
        DOB, 
        Email, 
        MNumber, 
        MWNumber, 
        AddressLine01, 
        AddressLine02, 
        City, 
        School, 
        GName, 
        GOccupation, 
        GContact, 
        Username, 
        Password, 
        CPassword
    })

    await newStudent.save().then(() =>{
        res.status(200).send({status:"New students added"})
    }).catch((e)=>{
        res.status(400).send({status : e})
    })
})

router.route("/update").put(async(req,res) =>{
    const id = req.body.id;
    const {
        fName,
        lName,
        nameWithInitials,
        NIC,
        Gender,
        DOB,
        Email,
        MNumber,
        MWNumber,
        AddressLine01,
        AddressLine02,
        City,
        School,
        GName,
        GOccupation,
        GContact,
        Username
    } = req.body;
        
    console.log(id);

    const newDetails = {
        fName,
        lName,
        nameWithInitials,
        NIC,
        Gender,
        DOB,
        Email,
        MNumber,
        MWNumber,
        AddressLine01,
        AddressLine02,
        City,
        School,
        GName,
        GOccupation,
        GContact,
        Username,
    }
    console.log(newDetails);
    console.log(id);
    console.log("hello")
    await RegistrationStudent.findByIdAndUpdate(id,newDetails).then(()=>{
        res.status(200).send({state:"Updated",data : newDetails})
    }).catch((err)=>{
        res.status(400).send({state:err})
    })
})

router.route("/delete/:id").delete(async (req,res)=>{
    const id = req.params.id;
    await RegistrationStudent.findByIdAndDelete(id).then(()=>{
        res.status(200).send({state:"Deleted"})
    }).catch(err =>{
        res.status(400).send({state:err})

    })
})

 module.exports = router;