const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Recordings = new mongoose.Schema({
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
    Rec:{
        type:String,
        required:true,
    },
   
});

//Export the model
const recordings = mongoose.model ("Recordings", Recordings)
module.exports = recordings