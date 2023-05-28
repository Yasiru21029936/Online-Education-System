const router = require('express').Router();
const AddAssignment = require('../models/AddAssignment');

//http://localhost:8080/
// View All the Bills

router.route("/").get(async (req,res) =>{
   await AddAssignment.find().then((data) =>{
        res.status(200).send({status :" Data Recieved",AddAssignment : data});
    }).catch((err)=>{
        res.status(400).send({status :err})

    })
})

router.route("/getAssignment").post(async (req,res) =>{
    const {ClassName,ClassType,Grade } = req.body
    await AddAssignment.find({$and:[{CName:{$eq:ClassName}},{CType:{$eq:ClassType}},{Grade:{$eq:Grade}}]}).then((data) =>{
         res.status(200).send({status :" Data Recieved",AddAssignment : data});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

router.route("/addAssignment").post(async (req,res) =>{

    const {ClassName,
        ClassType,
        Grade,
        AssignmentID,
        AssignmentTopic,
        AssignmentDesc,
        DueDate} = req.body;

    const File = req.files.File;
    const fileName = File.name;
    console.log(fileName)

    File.mv('Assests/UploadedAssignmentsByTeacher/'+fileName, err => console.log)
    
    
    const newAssignment = new AddAssignment({
        CName:ClassName,
        CType:ClassType,
        Grade:Grade,
        AssignmentID,
        AssignmentTopic,
        AssignmentDesc,
        DueDate ,
        File : fileName
    })

    await newAssignment.save().then(()=>{
        res.status(200).send({status:"New Assignment Added"})
    }).catch((e)=>{
        res.status(400).send({status : e})
        // console.log(e)
    })
})

router.route("/delete/:id").delete(async (req,res) =>{
    const id = req.params.id;

    await AddAssignment.findByIdAndDelete(id).then(() =>{
        res.status(200).send({state : 'Success'})
    }).catch((err) => {
        res.status(400).send({status : err})
    })

})

router.route("/update").put(async(req,res) =>{
    const id = req.body.id;
    const {
        CName,
        CType,
        Grade,
        AssignmentID,
        AssignmentTopic,
        AssignmentDesc,
        DueDate,
        File} = req.body;
        
    console.log(id);

    console.log(Grade)

    const newDetails = {
        CName,
        CType,
        Grade,
        AssignmentID,
        AssignmentTopic,
        AssignmentDesc,
        DueDate,
        File,
    }

    await AddAssignment.findByIdAndUpdate(id,newDetails).then(()=>{
        res.status(200).send({state:"Updated",data : newDetails})
    }).catch((err)=>{
        res.status(400).send({state:err})
    })
})

router.route("/setAssignments/:id").get(async(req,res) =>{
    const id = req.params.id;
    // console.log(id);
    await AddAssignment.findOne({_id:id}).then((assignment)=>{
        console.log(assignment);
        res.status(200).send({assignment:assignment})
    }).catch(err =>{
        res.status(400).send({state:err})
    })
})


module.exports = router;