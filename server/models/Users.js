const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    Role:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
});

//Export the model
const userCollection = mongoose.model('User', userSchema);
module.exports = userCollection;