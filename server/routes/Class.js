const router = require('express').Router();
const Class = require('../models/Class');

router.route("/").get(async (req,res) =>{
    await Class.find().then((Cdata) =>{
         res.status(200).send({status :" Data Recieved",classes : Cdata});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

 router.route("/addClass").post(async (req,res) => {
    const {ClassName, ClassType, Grade, ClassDate, ClassStartTime, ClassEndTime, ClassFees, uploadRec, TeacherName, TeacherMobile, TeacherEmail} = req.body;
    const newClass = new Class ({
        CName:ClassName,
        CType:ClassType,
        Grade:Grade,
        CDate:ClassDate,
        CSTime:ClassStartTime,
        CETime:ClassEndTime,
        CFees:ClassFees,
        uploadRec:uploadRec,
        TName:TeacherName,
        TMobile:TeacherMobile,
        TEmail:TeacherEmail
    })

    

    await newClass.save().then(() => {
        res.status(200).send({status:"New Module Added"})
    }).catch((e) => {
        res.status(400).send({status : e})
        // console.log(e)
    })
 })

 router.route("/delete/:id").delete(async (req,res) => {
    const id = req.params.id;

    await Class.findByIdAndDelete(id).then(() => {
        res.status(200).send({state : 'Success'})
    }).catch((e) => {
        res.status(400).send({status : e})
    })
 })

 router.route("/update").put(async(req,res) => {
    const id = req.body.id;
    const {ClassName,
        ClassType,
        Grade,
        ClassDate,
        ClassStartTime,
        ClassEndTime,
        ClassFees,
        uploadRec,
        TeacherName,
        TeacherMobile,
        TeacherEmail} = req.body;

    console.log(id);

    const newClassDetails = {
        CName:ClassName,
        ClType:ClassType,
        Grade:Grade,
        CDate:ClassDate,
        CSTime:ClassStartTime,
        CETime:ClassEndTime,
        CFees:ClassFees,
        uploadRec:uploadRec,
        TName:TeacherName,
        TMobile:TeacherMobile,
        TEmail:TeacherEmail,
    }

    await Class.findByIdAndUpdate(id, newClassDetails).then(() => {
        res.status(200).send({state:"Updated",data : newClassDetails})
    }).catch((err) => {
        res.status(400).send({state:err})
    })
 })

 module.exports = router
