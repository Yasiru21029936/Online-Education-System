const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Support_Service = new mongoose.Schema({
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

    contactNumber:{
        type:String,
        required:true,
        index:true,
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);