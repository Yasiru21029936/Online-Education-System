const router = require('express').Router();
const Attendance = require('../models/Attendance');

router.route("/").get(async (req,res) =>{
    await Attendance.find().then((data) =>{
        res.status(200).send({status :" Data Recieved",Attendance : data});
    }).catch((err)=>{
        res.status(400).send({status :err})
    })
});
router.route("/getAtten").post(async (req,res) =>{
    const {Grade, ClassName} = req.body
    await Attendance.find({$and:[{classType:{$eq:ClassName}},{Class:{$eq:Grade}}]}).then((Attendance) =>{
         res.status(200).send({status :" Data Recieved",Attendance : Attendance});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

router.route("/addAttendance").post(async (req,res) =>{
    const {Class,classType,Regno,date} = req.body;

    console.log(Class)
    console.log(classType)
    console.log(Regno)

    const newAtt = new Attendance({
        Class,
        classType,
        Regno,
        atDate:date
    })
    
    await newAtt.save().then(()=>{
        res.status(200).send({status:"Attendance Added"})
    }).catch((e)=>{
        res.status(400).send({status : e})
        // console.log(e)
    })
});

router.route("/delete/:id").delete(async(req,res) =>{
    await Attendance.findByIdAndDelete(req.params.id).then(()=>{
        res.status(200).send({state : "Deleted"})
    }).catch(err =>{
        res.status(400).send({state : err})
    })
})


router.route("/update").put(async(req,res) =>{
    const {Class,classType,Regno,date} = req.body;
    const id = req.body.id;

    const newData = {
        Class,
        classType,
        Regno,
        date
    }

    await Attendance.findByIdAndUpdate(id,newData).then(()=>{
        res.status(200).send({state : "Updated"})
    }).catch(err =>{
        res.status(400).send({state : err})

    })
})





 module.exports = router 
