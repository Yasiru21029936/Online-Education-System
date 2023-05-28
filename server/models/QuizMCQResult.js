const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var QuizMCQResultDB = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Marks:{
        type:Number,
        required:true
        
    },
    QID:{
        type:String,
        required:true
    }
});

//Export the model
const Quiz = mongoose.model('QuizMCQResultDB', QuizMCQResultDB);

module.exports = Quiz;