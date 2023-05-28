const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var QuizMCQDB = new mongoose.Schema({
    QMCQID:{
        type:String,
        unique:true
    },
    Grade:{
        type:String,
    },
    TeacherID:{
        type:String,
    },
    ModuleID:{
        type:String,
    }


   

});
//Export the model
const Quiz = mongoose.model("QuizMCQDB",QuizMCQDB);

module.exports = Quiz;