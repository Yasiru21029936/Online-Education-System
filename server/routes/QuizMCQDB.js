const router = require('express').Router();
const Quiz = require('../models/QuizMCQDB');

router.route("/").get(async (req,res) =>{
    await Quiz.find().then((QData) => {
        res.status(200).send({status :"Data Recieved", SendData : QData});
    }).catch((err) => {
        res.status(400).send({status : err})
    })
})

router.route("/getModuleQuiz").post(async (req,res) =>{
    const {Grade, ClassType, ClassName} = req.body
    await Quiz.find({$and:[{ModuleID:{$eq:ClassName}},{TeacherID:{$eq:ClassType}},{Grade:{$eq:Grade}}]}).then((QData) => {
        res.status(200).send({status :"Data Recieved", SendData : QData});
    }).catch((err) => {
        res.status(400).send({status : err})
    })
})

router.route("/InsertMCQ").post(async (req,res) =>{
    const {
        finalQuiz,
        Class,
        TID,
        Subject} = req.body;
        console.log(finalQuiz,Class,TID,Subject);

    const newMCQ = new Quiz({
        QMCQID:finalQuiz,
        Grade:Class,
        TeacherID:TID,
        ModuleID:Subject
    })
    await newMCQ.save().then(()=>{
        res.status(200).send({status:"New MCQ Added"})
    }).catch((e)=>{
        res.status(400).send({status : e})
        // console.log(e)
    })
})

router.route("/update").put(async (req,res) =>{
    const QMCQID = req.body.QMCQID;
    const id = req.body.id;

    console.log(QMCQID)

    const newData = {
        QMCQID
    }
    await Quiz.findByIdAndUpdate(id,newData).then(()=>{
        res.status(200).send({state:"Updated"})

    }).catch(err=>{
        res.status(400).send({state:err})
    })

})

router.route("/delete/:id").delete(async(req,res) =>{
    const id = req.params.id;

    await Quiz.findByIdAndDelete(id).then(()=>{
        res.status(200).send({state:"Deleted"})
    }).catch(err =>{
        res.status(400).send({state:"Deleted"})
    })
})

router.route("/getQuestion/:id").get(async(req,res) =>{
    const id = req.params.id;
    // console.log(id);
    await Quiz.findOne({_id:id}).then((quiz)=>{
        console.log(quiz);
        res.status(200).send({quiz:quiz})
    }).catch(err =>{
        res.status(400).send({state:err})
    })
})



module.exports = router