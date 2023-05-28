const teacherRegistration = require('../models/RegistrationTeacher');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');

// @desc get all users
// @route POST /userControl/
// @access private 
const getAllTeachers = async(req,res) =>{
    await teacherRegistration.find().then((teacher)=>{
        res.status(200).send({status : "data Received", teachers : teacher})
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })
}

// @desc get the current logged in user
// @route GET/userControl/getMe
// access private
const getMe = async(req,res) =>{
    // res.status(200).send({data:"this is me"})
    const id = req.user._id;
    res.status(201).send({user:req.user})
    // await teacherRegistration.find({_id:id}).then(data =>{
    //     res.status(201).send({user:data})
    // }).catch(err =>{
    //     res.status(400).send({status : err})
    
    // })
}

// @desc Register a Student
// @route POST/teacherRegistration/Register
// access public
const registerTeacher = async(req,res) =>{

    const{fName, lName, nameWithInitials, NIC, Gender, Email, MNumber, MWNumber, AddressLine01, AddressLine02, City, IName, Duration, Subjects, Medium, ESubject, EGrade, EMedium, EduDescription} = req.body;

    
    const userExixsts = await teacherRegistration.findOne({Username : Username});
    if(userExixsts){
        res.status(400).send({stauts : "Use a different User Name"})
    }else{
        
        // Hash the password
        const salt = await bycrypt.genSalt(10)
        const hashedPass = await bycrypt.hash(Password,salt)
        // create user
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
            //FormerTeacher, 
            IName, 
            Duration, 
            Subjects, 
            Medium, 
            ESubject, 
            EGrade, 
            EMedium,
            EduDescription,
        })
        
        await newTeacher.save().then(()=>{
            // console.log(newUser._id)
            res.status(200).send({user : newStudent,token:genarateToken(newStudent._id)})
        }).catch(err =>{
            res.status(400).send({status : err})
        })
    }
}

// @desc Login a user
// @route GET/userControl/login
// access public
const login = async(req,res) =>{

    const {name,password} = req.body;
    
    const findUser = await teacherRegistration.findOne({name:name})
    
    // console.log("find user ",findUser)
    
    // console.log(await bycrypt.compare(password,findUser.password))
    
    if(findUser && (await bycrypt.compare(password,findUser.password))){
            res.status(200).send({token:genarateToken(findUser._id),user:findUser})
        }else{
        res.status(400).send({status:"UserName or Password incorrect"})
    }
}

// genarate JWT
const genarateToken = (id) =>{
    return jwt.sign(
        {id}, 
        process.env.JWT_SECRET,
        {
            expiresIn : '30d',
        }
        )
}


// module.exports = router;
module.exports = {getAllTeachers,getMe,registerUser,login}