const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Notes = new mongoose.Schema({
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
    LName:{
        type:String,
        required:true,
    },
    Note:{
        type:String,
        required:true,
    },
   
});

//Export the model
const notes = mongoose.model ("Notes", Notes)
module.exports = notes