const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Classfee = new mongoose.Schema({
    Type:{
        type:String,
        required:true,
        unique:true,
    },
    Class:{
        type:String,
        required:true,
    },
    Method:{
        type:String,
        required:true,
    },
    Remark:{
        type:String,
    }
});

//Export the model
const classFees = mongoose.model("ClassFees",Classfee);

module.exports = classFees;