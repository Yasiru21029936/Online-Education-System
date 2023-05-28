const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var BillPayment = new mongoose.Schema({

    BillCategory:{
        type:String,
        required:true,
        index:true,
    },
    Description:{
        type:String,
        required:true,
    },
    Account:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        required:true,
    },
    Remark:{
        type:String,
        required:true,
    },
    
});

//Export the model
const BillPayments = mongoose.model("BillPayment",BillPayment);

module.exports = BillPayments;