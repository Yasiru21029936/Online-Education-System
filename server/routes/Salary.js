const router = require('express').Router();
const Salary = require('../models/Salary');

router.route("/").get(async (req,res) =>{
    await Salary.find().then((data) =>{
        res.status(200).send({status :" Data Recieved",salary : data});
    }).catch((err)=>{
        res.status(400).send({status :err})
    })
});


router.route("/addSalary").post(async (req,res) =>{
    const {Category,Employee,Account,date,Amout} = req.body;

    console.log("Category "+Category)
    console.log("Employee "+Employee)
    console.log("Acount " + Account)
    console.log("Date " + date)
    console.log("Amount " +Amout )

    const newAtt = new Salary({
        Category,
        Employee,
        Account,
        date,
        Amout
    })
    
    await newAtt.save().then(()=>{
        res.status(200).send({status:"Salary Added"})
    }).catch((e)=>{
        res.status(400).send({status : e})
        // console.log(e)
    })
});

router.route("/delete/:id").delete(async(req,res) =>{
    await Salary.findByIdAndDelete(req.params.id).then(()=>{
        res.status(200).send({state : "Deleted"})
    }).catch(err =>{
        res.status(400).send({state : err})
    })
})


router.route("/update").put(async(req,res) =>{
    const {Category,Employee,Account,date,Amout} = req.body;
    const id = req.body.id;

    const newData = {
        Category,
        Employee,
        Account,
        date,
        Amout
    }

    await Salary.findByIdAndUpdate(id,newData).then(()=>{
        res.status(200).send({state : "Updated"})
    }).catch(err =>{
        res.status(400).send({state : err})

    })
})





 module.exports = router 
