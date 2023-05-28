const mongoose = require('mongoose');

var RegistrationStudent = new mongoose.Schema({
    fName:{
        type:String,
        required:true,
        
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
    },
    Gender:{
        type:String,
        required:true,
    },
    DOB:{
        type:Date,
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
    School:{
        type:String,
        required:true,
    },
    GName:{
        type:String,
        required:true,
    },
    GOccupation:{
        type:String,
        required:true,
    },
    GContact:{
        type:String,
        required:true,
    },
    Username:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    }

});

const studentRegistration = mongoose.model("StudentRegistration",RegistrationStudent);

module.exports = studentRegistration;