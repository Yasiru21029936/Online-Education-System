const router = require('express').Router();
const Quiz = require('../models/QuizMCQDB');
const QuizResult = require('../models/QuizMCQResult');

router.route("/").get(async (req,res) =>{
    await QuizResult.find().then((QData) => {
        res.status(200).send({status :"Data Recieved", SendData : QData});
    }).catch((err) => {
        res.status(400).send({status : err})
    })
})

router.route("/InsertMark").post(async (req,res) =>{
    const {
        Username,
        Marks,
        QID} = req.body;
    
    const newMark = new QuizResult({
        Username,
        Marks,
        QID,
    })
    console.log(newMark);
    await newMark.save().then(()=>{
        res.status(200).send({status:"Marks Added"})
    }).catch((e)=>{
        res.status(400).send({status : e})
    })
})
router.route("/getmin/:id").get(async (req,res) => {
    const id = req.params.id;
    await QuizResult.find({QID:id}).sort("Marks").limit(-1).then((Quiz)=>{
        res.status(200).send({Quiz:Quiz})
    }).catch(err =>{
        res.status(400).send({state:err})
    })
})
router.route("/getmax/:id").get(async (req,res) => {
    const id = req.params.id;
    //await QuizResult.findOne({QID:id}).sort({Marks:-1}).limit(1).then((Max)=>{
    await QuizResult.findOne({QID:id}).sort({Marks:-1}).limit(1).then((Max)=>{
        console.log(Max);
        res.status(200).send({Max:Max})
    }).catch(err =>{
        res.status(400).send({state:err})
    })
})
router.route("/getResult/:id").get(async(req,res) =>{
    const id = req.params.id;
    // console.log(id);
    await QuizResult.find({QID:id}).then((SendData)=>{
        console.log(SendData);
        res.status(200).send({SendData:SendData})
    }).catch(err =>{
        res.status(400).send({state:err})
    })
})

 module.exports = router