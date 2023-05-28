const express = require('express');
const mongoose =  require ('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); //js middleware
require("dotenv").config();
const fileUpload = require('express-fileupload');

const app = express();

const port = process.env.PORT || 8080;

app.use("/Assests",express.static(__dirname+"/Assests"))


app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

const url = process.env.MONGODB_URL;

mongoose.connect(url,{
    useNewUrlParser :true,
    useUnifiedTopology :true
});


const connection = mongoose.connection;
// 
connection.once("open",() =>{
    console.log("MongoDb connected!");
});

// http://localhost:8080/Student

// const StudentForm = require('./routes/From.js');
// app.use("/Student",StudentForm);

const Bills = require('./routes/BillPayment.js');
app.use("/Bill",Bills);

// http://localhost:8080/AddAssignment
const AddAssignment = require('./routes/AddAssignment.js');
app.use("/AddAssignment",AddAssignment);




// http://localhost:8080/Attendence
const Attendance = require('./routes/Attendance.js');
app.use("/Attendence",Attendance);

//http://localhost:8080/Support_Server
const Support_Service = require('./routes/Support_Service.js');
app.use("/Support_Service",Support_Service);


//http://localhost:8080/registrationStudent
const UserAuth = require('./routes/UserAuth.js');
app.use("/authUser",UserAuth);

// const registrationStudent = require('./routes/RegistrationStudent.js');
// app.use("/studentRegistration",registrationStudent);

//http://localhost:8080/registrationTeacher
const registrationTeacher = require('./routes/RegistrationTeacher.js');
app.use("/registrationTeacher",registrationTeacher);

const QuizMCQDB = require('./routes/QuizMCQDB.js');
app.use("/QuizMCQDB",QuizMCQDB);

const QuizMCQResult = require('./routes/QuizMCQResultDB.js');
app.use("/QuizMCQResultDB",QuizMCQResult);

const classFee = require('./routes/Classfees');
app.use("/classfee",classFee);

const salary = require('./routes/Salary');
app.use("/salary",salary);

// https://localhost:8080/Student

const Class = require('./routes/Class.js');
app.use("/Class",Class);

const Notices = require('./routes/ClassNotices.js');
app.use("/Notices",Notices);

const Notes = require('./routes/ClassNotes.js');
app.use("/Notes",Notes);

const Recordings = require('./routes/ClassRec.js');
app.use("/Recordings",Recordings);

app.listen(port,()=>{
    console.log("PORT connected on "+port);
})
// Routes, Controllers, Models
// route contains all the routes, controller contains all the functions which are assosiated with the route