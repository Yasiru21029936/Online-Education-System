const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Class = new mongoose.Schema({
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
    CDate:{
        type:String,
        required:true,
    },
    CSTime:{
        type:String,
        required:true,
    },
    CETime:{
        type:String,
        required:true,
    },
    CFees:{
        type:String,
        required:true,
    },
    uploadRec:{
        type:String,
        required:true,
    }, 
    TName:{
        type:String,
        required:true,
    },
    TMobile:{
        type:String,
        required:true,
    },
    TEmail:{
        type:String,
        required:true,
    },
   
});

//Export the model
const classes = mongoose.model ("Class", Class)
module.exports = classes