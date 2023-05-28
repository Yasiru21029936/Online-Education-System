const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Notices = new mongoose.Schema({
    CName:{
        type:String,
        required:true,
        index:true,
    },
    CType:{
        type:String,
        required:true,
    },
    Grade:{
        type:String,
        required:true,
    },
    Notice:{
        type:String,
        required:true,
    },
   
});

//Export the model
const notices = mongoose.model ("Notices", Notices)
module.exports = notices