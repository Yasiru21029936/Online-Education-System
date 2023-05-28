const router = require('express').Router();
const ClassNotes = require('../models/ClassNotes');

router.route("/").get(async (req,res) =>{
    await ClassNotes.find().then((CNdata) =>{
         res.status(200).send({status :" Data Recieved",notes : CNdata});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

 router.route("/getNote").post(async (req,res) =>{
    const {Grade, ClassType, ClassName} = req.body
    await ClassNotes.find({$and:[{CName:{$eq:ClassName}},{CType:{$eq:ClassType}},{Grade:{$eq:Grade}}]}).then((CNdata) =>{
         res.status(200).send({status :" Data Recieved",notes : CNdata});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

 router.route("/addNotes").post(async (req,res) => {
    const {ClassName, ClassType, Grade, LessonName, Notes} = req.body;
    const newNote = new ClassNotes ({
        CName:ClassName,
        CType:ClassType,
        Grade:Grade,
        LName:LessonName,
        Note:Notes
    })

    

    await newNote.save().then(() => {
        res.status(200).send({status:"New Note Added"})
    }).catch((e) => {
        res.status(400).send({status : e})
        // console.log(e)
    })
 })

 router.route("/delete/:id").delete(async (req,res) => {
    const id = req.params.id;

    await ClassNotes.findByIdAndDelete(id).then(() => {
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
        Notes} = req.body;

    console.log(id);

    const newNotesDetails = {
        CName:ClassName,
        ClType:ClassType,
        Grade:Grade,
        LName:LessonName,
        Note:Notes
    }

    await ClassNotes.findByIdAndUpdate(id, newNotesDetails).then(() => {
        res.status(200).send({state:"Updated",data : newNotesDetails})
    }).catch((err) => {
        res.status(400).send({state:err})
    })
 })

 module.exports = router
