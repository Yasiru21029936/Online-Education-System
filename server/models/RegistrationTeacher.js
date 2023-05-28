const mongoose = require('mongoose');

var RegistrationTeacher = new mongoose.Schema({
    fName:{
        type:String,
        required: true,
    },
    lName:{
        type:String,
        required:true,
    },
    nameWithInitials:{
        type:String,
        required:true,
    },
    NIC:{
        type:String,
        required:true,
        unique:true,
        
    },
    Gender:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    MNumber:{
        type:String,
        required:true,
    },
    MWNumber:{
        type:String,
        required:true,
    },
    AddressLine01:{
        type:String,
        required:true,
    },
    AddressLine02:{
        type:String,
        required:true,
    },
    City:{
        type:String,
        required:true,
    },
    // FromerTeacher:{
    //     type:Boolean,
    //     required:true,
    // },
    IName:{
        type:String,
        required:true,
    },
    Duration:{
        type:String,
        required:true,
    },
    Subjects:{
        type:String,
        required:true,
    },
    Medium:{
        type:String,
        required:true,
    },
    ESubject:{
        type:String,
        required:true,
    },
    EGrade:{
        type:String,
        required:true,
    },
    EMedium:{
        type:String,
        required:true,
    },
    EduDescription:{
        type:String,
        required:true,
    },
    status:{
        type : String,
        required :true
    }
});

const teacherRegistration = mongoose.model("TeacherRegistration", RegistrationTeacher);
module.exports = teacherRegistration;
