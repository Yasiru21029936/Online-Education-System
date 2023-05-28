const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Attendancesystem = new mongoose.Schema({
    Class:{
        type:String,
        required:true,
    },
    classType:{
        type:String,
        required:true,
    },
    Regno:{
        type:String,
        required:true,
        unique:true,
    },
    atDate:{
        type:Date,
        required:true,
    }
    
});

//Export the model
const Attendance = mongoose.model ("Attendance",Attendancesystem);
module.exports = Attendance
