const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Support_Server = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true,
    },
    email:{
        type:String,
        required:true,

    },
    registrationNumber:{
        type:String,
        required:true,
        unique:true,
    },
    school:{
        type:String,
        required:true,
    },

    nic:{
        type:String,
        required:true,
        unique:true

    },

    contactNumber:{
        type:String,
        required:true,
        index:true,
    },

    requestType:{
        type:String,
        required:true,

    },

    moduleName:{
        type:String,
        required:true,

    },

    moduleCode:{
        type:String,
        required:true,
        unique:true,

    },

    message:{
        type:String,
        required:true,

    },
});

//Export the model
const Support_Service= mongoose.model("Support_Service",Support_Server)
module.exports = Support_Service