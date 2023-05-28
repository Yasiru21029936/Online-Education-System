const router = require('express').Router();
const teacherRegistration = require('../models/RegistrationTeacher');
const userCollection = require('../models/Users')

router.route("/").get(async (req,res) =>{
    await teacherRegistration.find().then((teacher) =>{
         res.status(200).send({status :" Data Recieved",teacherRegistration : teacher});
     }).catch((err)=>{
         res.status(400).send({status :err})
     })
})

router.route('/TeacherRegistration').post(async(req,res) =>{
    const{fName, lName, nameWithInitials, NIC, Gender, Email, MNumber, MWNumber, AddressLine01, AddressLine02, City, IName, Duration, Subjects, Medium, ESubject, EGrade, EMedium, EduDescription,status} = req.body;
    const newTeacher = new teacherRegistration({
        fName, 
        lName, 
        nameWithInitials, 
        NIC, 
        Gender, 
        Email, 
        MNumber, 
        MWNumber, 
        AddressLine01, 
        AddressLine02, 
        City, 
        IName, 
        Duration, 
        Subjects, 
        Medium, 
        ESubject, 
        EGrade, 
        EMedium,
        EduDescription,
        status
    })
    console.log(newTeacher);
    
    await newTeacher.save().then(() =>{
        res.status(200).send({status:"Your Responses are submitted. Thankyou."})
    }).catch((e) =>{
        res.status(400).send({status : e})
    })
})


// get pending teachers
router.route("/getPending").get(async(req,res) =>{
    await teacherRegistration.find({status:'Pending'}).then((pendingTeachers) =>{
        res.status(200).send({status :"Data Received",pendingTeachers : pendingTeachers})
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })
})

router.route('/updateTeacherStatus').put(async(req,res) =>{
    const{fName, lName, nameWithInitials, NIC, Gender, Email, MNumber, MWNumber, AddressLine01, AddressLine02, City, IName, Duration, Subjects, Medium, ESubject, EGrade, EMedium, EduDescription,status} = req.body;
    const {_id} = req.body;

    const newData = {
        fName, lName, nameWithInitials, NIC, Gender, Email, 
        MNumber, MWNumber, AddressLine01, AddressLine02, City, IName,
         Duration, Subjects, Medium, ESubject, EGrade, EMedium, EduDescription,status
    }
    console.log(_id,status)
    
    await teacherRegistration.findByIdAndUpdate(_id,newData).then(()=>{
        res.status(200).send({status : "Teacher Status Updated"})
    }).catch(err =>{
        res.status(400).send({status : err})

    })
})

// provide Login details to a teacher

router.route('/provideLoginTeacher').put(async(req,res) =>{
    const {id,status} = req.body;
    await teacherRegistration.findByIdAndUpdate(id,status).then(()=>{
        res.status(200).send({status : "Teacher Status Updated"})
    }).catch(err =>{
        res.status(400).send({status : err})

    })
})


module.exports = router;