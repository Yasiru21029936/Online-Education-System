const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Salary = new mongoose.Schema({
    Category:{
        type:String,
        required:true,
    },
    Employee:{
        type:String,
        required:true,
        unique:true,
    },
    Account:{
        type:String,
        required:true,
        unique:true,
    },
    date:{
        type:Date,
        required:true,
    },
    Amout:{
        type:String,
        required:true,
    },
});

//Export the model
const salary = mongoose.model("Salary",Salary);

module.exports = salary;