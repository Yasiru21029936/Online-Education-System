const router = require('express').Router();
const ClassRec = require('../models/ClassRec');

router.route("/").get(async (req,res) =>{
    await ClassRec.find().then((CRdata) =>{
         res.status(200).send({status :" Data Recieved",recordings : CRdata});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

 router.route("/getRecording").post(async (req,res) =>{
    const {Grade, ClassType, ClassName} = req.body
    await ClassRec.find({$and:[{CName:{$eq:ClassName}},{CType:{$eq:ClassType}},{Grade:{$eq:Grade}}]}).then((CRdata) =>{
         res.status(200).send({status :" Data Recieved",recordings : CRdata});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

 router.route("/addRecordings").post(async (req,res) => {
    const {ClassName, ClassType, Grade, LessonName, Recording} = req.body;
    const newRec = new ClassRec ({
        CName:ClassName,
        CType:ClassType,
        Grade:Grade,
        LName:LessonName,
        Rec:Recording
    })

    

    await newRec.save().then(() => {
        res.status(200).send({status:"New Recording Added"})
    }).catch((e) => {
        res.status(400).send({status : e})
        // console.log(e)
    })
 })

 router.route("/delete/:id").delete(async (req,res) => {
    const id = req.params.id;

    await ClassRec.findByIdAndDelete(id).then(() => {
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
        LessonName,
        Recording} = req.body;

    console.log(id);

    const newRecDetails = {
        CName:ClassName,
        ClType:ClassType,
        Grade:Grade,
        LName:LessonName,
        Rec:Recording
    }

    await ClassRec.findByIdAndUpdate(id, newRecDetails).then(() => {
        res.status(200).send({state:"Updated",data : newRecDetails})
    }).catch((err) => {
        res.status(400).send({state:err})
    })
 })

 module.exports = router
