const userCollection = require('../models/Users')
const studentRegistration = require('../models/registrationStudent');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');

// @desc get all users
// @route POST /userControl/
// @access private 
const getAllUsers = async(req,res) =>{
    await userCollection.find().then((Users)=>{
        res.status(200).send({status : "data Received", Users : Users})
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })
}

// @desc Register a User
// @route POST/userCollection/RegisterUser
// access public
const RegisterUser = async(req,res) =>{

    const{fName,MNumber,Username, Password,role,Email} = req.body;
    
    const userExixsts = await userCollection.findOne({userName : Username});
    if(userExixsts){
        res.status(400).send({status : "Use a different User Name"})
    }else{
        
        // Hash the password
        const salt = await bycrypt.genSalt(10)
        const hashedPass = await bycrypt.hash(Password,salt)
        // create user
        const newUser = new userCollection({
            name:fName,
            userName:Username,
            mobile:MNumber,
            password:hashedPass,
            Email,
            Role:role,

        })

        // save user to users

        await newUser.save().then(() =>{
            res.status(200).send({status : "User Registration Successfull!"})
        }).catch(err =>{
            console.log(err)
            res.status(400).send({status : err})

        })


        // await newUser.save().then(()=>{
        //     ////console.log(newUser._id , "This is the id from insert")
        //     res.status(200).send({user : newStudent,token:genarateToken(newStudent._id)})
        // }).catch(err =>{
        //     //console.log("this is the error status")
        //     res.status(400).send({status : err})
        // })
    }
}

// @desc UpdateAUser
// @route PUT/authUser/UpdateUser
// access public
const UpdateUser = async(req,res) =>{

    const{fName,MNumber,Username, Password,role,Email,id} = req.body;
    
        
        // Hash the password
        const salt = await bycrypt.genSalt(10)
        const hashedPass = await bycrypt.hash(Password,salt)
        // create user
        const updateUser = {
            name:fName,
            userName:Username,
            mobile:MNumber,
            password:hashedPass,
            Email,
            Role:role,
        }

        // save user to users
        await userCollection.findByIdAndUpdate(id,updateUser).then(() =>{
            res.status(200).send({status : "User Updated Successfull!"})
        }).catch(err =>{
            res.status(400).send({status : err})

        })

        // await newUser.save().then(()=>{
        //     //console.log(newUser._id , "This is the id from insert")
        //     res.status(200).send({user : newStudent,token:genarateToken(newStudent._id)})
        // }).catch(err =>{
        //     //console.log("this is the error status")
        //     res.status(400).send({status : err})
        // })
    
}

// @desc delete A user
// @route deletet/userControl/delete
// access private
const deleteUser = async(req,res) =>{
    const id = req.params.id;
    await userCollection.findByIdAndDelete(id).then(()=>{
        res.status(200).send({state:"Deleted"})
    }).catch(err =>{
        res.status(400).send({state:err})

    })
}

// @desc get all the employees
// @route getEmployees
// access private

const getEmployeesWst = async(req,res)=>{
    await userCollection.find({$and:[{Role:{$not:{$eq:'student'}}},{Role:{$not:{$eq:'Teacher'}}}]}).then((Users)=>{
        res.status(200).send({status : "data Received", Employees : Users})
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })
}

const getST = async(req,res) =>{
    await userCollection.find({$or:[{Role:{$eq:'student'}},{Role:{$eq:'Teacher'}}]}).then((Users)=>{
        res.status(200).send({status : "data Received", Employees : Users})
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })
}

const getEmployees = async(req,res)=>{
    await userCollection.find({Role:{ $ne:'student'}}).then((Users)=>{
        res.status(200).send({status : "data Received", Employees : Users})
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })
}


// @desc post specific employee category
// @route getEmployees
// access private

const getEmployeeCat = async(req,res)=>{
    const {category} = req.body;

    // ////console.log("Category: "+category)

    await userCollection.find({Role:category}).then((Users)=>{
        res.status(200).send({status : "data Received", Employees : Users})
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })
}



// @desc get the current logged in user
// @route GET/userControl/getMe
// access private
const getMe = async(req,res) =>{
    // res.status(200).send({data:"this is me"})
    res.status(201).send({user:req.user})
    // await userCollection.find({_id:id}).then(data =>{
    //     res.status(201).send({user:data})
    // }).catch(err =>{
    //     res.status(400).send({status : err})
    
    // })
}

// @desc Login a user
// @route GET/userControl/login
// access public
const login = async(req,res) =>{

    const {username,password} = req.body;
    
    const findUser = await userCollection.findOne({userName:username})
    
    // ////console.log("find user ",findUser)
    
    // ////console.log(await bycrypt.compare(password,findUser.password))
    
    if(findUser && (await bycrypt.compare(password,findUser.password))){  //decrypt the hash password  of the database
            res.status(200).send({token:genarateToken(findUser._id),user:findUser}) // generate a token when an user logging into the system
        }else{
        res.status(400).send({status:"UserName or Password incorrect"})
    }
}


// @desc get all users
// @route POST /userControl/
// @access private 
const getAllStudents = async(req,res) =>{
    await studentRegistration.find().then((Students)=>{
        res.status(200).send({status : "data Received", Students : Students})
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })
}


// @desc Register a Student
// @route POST/userCollection/Register
// access public
const RegisterStudent = async(req,res) =>{

    const{fName, lName, nameWithInitials,NIC, Gender, DOB, Email, MNumber, MWNumber, AddressLine01, AddressLine02, City, School, GName, GOccupation, GContact, Username, Password,role} = req.body;
    
    const userExixsts = await userCollection.findOne({userName : Username});
    if(userExixsts){
        res.status(400).send({stauts : "Use a different User Name"})
    }else{
        
        // Hash the password
        const salt = await bycrypt.genSalt(10)  //generate a key 
        const hashedPass = await bycrypt.hash(Password,salt) //then the password and the key generate a hash key and send it to the mongoDB
        // create user
        const newStudent = new studentRegistration({
            fName, 
            lName, 
            nameWithInitials,
            NIC, 
            Gender, 
            DOB, 
            Email, 
            MNumber, 
            MWNumber, 
            AddressLine01, 
            AddressLine02, 
            City, 
            School, 
            GName, 
            GOccupation, 
            GContact, 
            Username, 
            role,
            Password:hashedPass, 
        })

        const newUser = new userCollection({
            name:fName,
            userName:Username,
            mobile:MNumber,
            password:hashedPass,
            Role:role,
            Email:Email
        })

        // add Student to users Collection
        await newUser.save().catch(err =>{
            ////console.log("new User error",err)
            res.status(400).send({status : err})
        })
        // save student in student collection
        await newStudent.save().then(()=>{
            // ////console.log(newUser._id)
            res.status(200).send({user : newUser,token:genarateToken(newStudent._id)})
        }).catch(err =>{
            ////console.log("new Student error",err)
            res.status(400).send({status : err})
        })
    }
}

// @desc Login a user
// @route GET/userControl/login
// access public
const deleteStudent = async(req,res) =>{
    const id = req.params.id;
    await studentRegistration.findByIdAndDelete(id).then(()=>{
        res.status(200).send({state:"Deleted"})
    }).catch(err =>{
        res.status(400).send({state:err})

    })
}

const updateStudent = async(req,res) =>{
    const id = req.body.id;
    const {
        fName,
        lName,
        nameWithInitials,
        NIC,
        Gender,
        DOB,
        Email,
        MNumber,
        MWNumber,
        AddressLine01,
        AddressLine02,
        City,
        School,
        GName,
        GOccupation,
        GContact,
        Username
    } = req.body;
        
    ////console.log(id);

    const newDetails = {
        fName,
        lName,
        nameWithInitials,
        NIC,
        Gender,
        DOB,
        Email,
        MNumber,
        MWNumber,
        AddressLine01,
        AddressLine02,
        City,
        School,
        GName,
        GOccupation,
        GContact,
        Username,
    }
    ////console.log(newDetails);
    ////console.log(id);
    ////console.log("hello")
    await studentRegistration.findByIdAndUpdate(id,newDetails).then(()=>{
        res.status(200).send({state:"Updated",data : newDetails})
    }).catch((err)=>{
        res.status(400).send({state:err})
    })
}


// genarate JW token for every user
const genarateToken = (id) =>{
    return jwt.sign(
        {id}, 
        process.env.JWT_SECRET,
        {
            expiresIn : '30d', //expires every 30 days
        }
        )
}



// module.exports = router;
module.exports = {getAllStudents,getMe,RegisterStudent,login,deleteStudent,updateStudent,deleteUser,getAllUsers,RegisterUser,UpdateUser,getEmployees,getEmployeeCat,getEmployeesWst,getST}