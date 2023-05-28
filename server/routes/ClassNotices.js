const router = require('express').Router();
const ClassNotices = require('../models/ClassNotices');

router.route("/").get(async (req,res) =>{
    await ClassNotices.find().then((CNdata) =>{
         res.status(200).send({status :" Data Recieved",notices : CNdata});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

 router.route("/getNotice").post(async (req,res) =>{
    const {Grade, ClassType, ClassName} = req.body
    await ClassNotices.find({$and:[{CName:{$eq:ClassName}},{CType:{$eq:ClassType}},{Grade:{$eq:Grade}}]}).then((CNdata) =>{
         res.status(200).send({status :" Data Recieved",notices : CNdata});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

 router.route("/addNotice").post(async (req,res) => {
    const {ClassName, ClassType, Grade, Notices} = req.body;
    const newNotice = new ClassNotices ({
        CName:ClassName,
        CType:ClassType,
        Grade:Grade,
        Notice:Notices
    })

    

    await newNotice.save().then(() => {
        res.status(200).send({status:"New Notice Added"})
    }).catch((e) => {
        res.status(400).send({status : e})
        // console.log(e)
    })
 })

 router.route("/delete/:id").delete(async (req,res) => {
    const id = req.params.id;

    await ClassNotices.findByIdAndDelete(id).then(() => {
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
        Notices} = req.body;

    console.log(id);

    const newNoticeDetails = {
        CName:ClassName,
        ClType:ClassType,
        Grade:Grade,
        Notice:Notices
    }

    await ClassNotices.findByIdAndUpdate(id, newNoticeDetails).then(() => {
        res.status(200).send({state:"Updated",data : newNoticeDetails})
    }).catch((err) => {
        res.status(400).send({state:err})
    })
 })

 module.exports = router
