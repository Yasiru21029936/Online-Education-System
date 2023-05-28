const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var AddAssignment = new mongoose.Schema({

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

    AssignmentID:{
        type:String,
        required:true,
        unique:true,
    },
    AssignmentTopic:{
        type:String,
        required:true,
    },
    AssignmentDesc:{
        type:String,
        required:true,
    },
    DueDate:{
        type:Date,
        required:true,
    },
    File:{
        type:String,
        required:true,
    },
    
});

//Export the model
const AddAssignments = mongoose.model("AddAssignment",AddAssignment);

module.exports = AddAssignments;
