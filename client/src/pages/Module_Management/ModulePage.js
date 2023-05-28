import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/esm/Table'
import Button from 'react-bootstrap/Button';
import Classes from './Classes';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import notes from '../../../../server/models/ClassNotes';

function ModulePage() {
  const location = useLocation();
  // console.log(location)

  const navigation = useNavigate();
  const [ClassName, setClassName] = useState(location.state.props.CName);
  const [ClassType, setClassType] = useState(location.state.props.CType);
  const [Grade, setGrade] = useState(location.state.props.Grade);
  const [ClassDate, setClassDate] = useState(location.state.props.CDate);
  const [ClassStartTime, setClassStartTime] = useState(location.state.props.CSTime);
  const [ClassEndTime, setClassEndTime] = useState(location.state.props.CETime);
  const [ClassFees, setClassFees] = useState(location.state.props.CFees);
  const [TeacherName, setTeacherName] = useState(location.state.props.TName);
  const [TeacherMobile, setTeacherMobile] = useState(location.state.props.TMobile);
  const [TeacherEmail, setTeacherEmail] = useState(location.state.props.TEmail);
  const [Notices, setNotices] = useState([])
  const [Notes, setNotes] = useState([])
  const [Assignment, setAssignment] = useState([])
  const [Recordings, setRecordings] = useState([])
  const [Quiz, setQuiz] = useState([])

  const StartQuiz = (elem) => {
    navigation("/Quiz_Management/QuizDetails",{state:{props:{id:elem}}})
  }
  const ShowResult = (elem) => {
    navigation("/Quiz_Management/QuizResults",{state:{props:{id:elem}}})
  }
  const CreatQuiz = () => {
    const MData = {
      ClassName,
      ClassType,
      Grade
    };
    navigation('/Quiz_Management/QuizUpload',{state:{props:MData}})
  }

  const EditQuiz = () => {
    const MData = {
      ClassName,
      ClassType,
      Grade
    };
    navigation('/Quiz_Management/QuizEdit',{state:{props:MData}})
  }

  const submit = (e) => {
    
    navigation('/ModulePage/SubmitAssignment',{state:{props:e}})
  
  }
  const CreatNotice = () => {
    const MData = {
      ClassName,
      ClassType,
      Grade
    };
    navigation('/Classes/AddNotice',{state:{props:MData}})
  }
  const CreatNote = () => {
    const MData = {
      ClassName,
      ClassType,
      Grade
    };
    navigation('/Classes/AddNotes',{state:{props:MData}})
  }
  const CreatRecord = () => {
    const MData = {
      ClassName,
      ClassType,
      Grade
    };
    navigation('/Classes/AddRecordings',{state:{props:MData}})
  }

  const CreatAttendence = () => {
    const MData = {
      ClassName,
      ClassType,
      Grade
    };
    navigation('/Attendance_Management/Attendanceform',{state:{props:MData}})
  }


  useEffect(() => {
    axios.post("http://localhost:8080/Notices/getNotice", {Grade:Grade, ClassType:ClassType, ClassName:ClassName}).then(res => {
      // console.log(res.data.notices)
      setNotices(res.data.notices)
    })
    axios.post("http://localhost:8080/Notes/getNote", {Grade:Grade, ClassType:ClassType, ClassName:ClassName}).then(res => {
      // console.log(res.data.notes)
      setNotes(res.data.notes)
    })
    axios.post("http://localhost:8080/Recordings/getRecording", {Grade:Grade, ClassType:ClassType, ClassName:ClassName}).then(res => {
      // console.log(res.data.recordings)
      setRecordings(res.data.recordings)
    })
    axios.post("http://localhost:8080/QuizMCQDB/getModuleQuiz", {Grade:Grade, ClassType:ClassType, ClassName:ClassName}).then(res => {
      // console.log(res.data.SendData)
      setQuiz(res.data.SendData)
    })

    axios.post("http://localhost:8080/AddAssignment/getAssignment", {Grade:Grade, ClassType:ClassType, ClassName:ClassName}).then(res => {
      // console.log(res.data.AddAssignment)
      setAssignment(res.data.AddAssignment)
    })

   


  }, [])

  
  return (
    <>
    <Classes/>

      <div style={{position: 'left', marginLeft:'30px',marginTop:'20px' ,marginBottom:'10px'}}>
        <p><u><b>{ClassName} {Grade}</b></u></p>
        <h4>{ClassDate} {ClassStartTime} To {ClassEndTime} </h4>
      </div>
      <div style={{position: 'left', marginLeft:'30px',marginTop:'20px' ,marginBottom:'30px'}}>
        <p><u><b>Teacher Details</b></u></p>
        <h5>Name : {TeacherName} </h5>
        <h5>Mobile : {TeacherMobile} </h5>
        <h5>Email : {TeacherEmail} </h5>
        <br/>
          <Button onClick={() =>{CreatAttendence(ClassName,ClassType,Grade)}}>+ Add Attendence</Button>
        
      </div>

     <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Notices</Accordion.Header>
        <Accordion.Body>
        <a href='/Classes/AddNotice'>
          <Button onClick={() =>{CreatNotice(ClassName,ClassType,Grade)}}>+ Add Notice</Button>
          </a>
          <br></br>
          <br></br>
          {Notices.map((e,i) => (
            <>
            <div style={{marginLeft:'20px' , padding:'10px'}}>
                {e.Notice} <br></br>
                <hr></hr>
            </div>
            </>
          ))}
        </Accordion.Body>
      </Accordion.Item>
          
    
    <Accordion.Item eventKey="2">
        <Accordion.Header>Notes</Accordion.Header>
        <Accordion.Body>
        <a href='/Classes/AddNotes'>
          <Button onClick={() =>{CreatNote(ClassName,ClassType,Grade)}}>+ Add Note</Button>
          </a>
          <br></br>
          <br></br>
        {Notes.map((e,i) => (
            <>
           <div style={{marginLeft:'20px', padding:'0px'}}>
                {e.Note} <br></br>
                <hr></hr>
            </div>
            </>
          ))}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Recordings</Accordion.Header>
        <Accordion.Body>
        <a href='/Classes/AddRecordings'>
          <Button onClick={() =>{CreatRecord(ClassName,ClassType,Grade)}}>+ Add Recording</Button>
          </a>
          <br></br>
          <br></br>
        {Recordings.map((e,i) => (
            <>
            <div style={{marginLeft:'20px', padding:'10px'}}>
                {e.Rec} <br></br>
                <hr></hr>
            </div>
            </>
          ))}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Quiz</Accordion.Header>
        <Accordion.Body>
          <a href='/Quiz_Management/QuizUpload'>
          <Button onClick={() =>{CreatQuiz(ClassName,ClassType,Grade)}}>+ Add Quiz</Button>
          </a>
          <a href='/Quiz_Management/QuizEdit'>
          <Button style={{marginLeft:'10px'}}onClick={() =>{EditQuiz(ClassName,ClassType,Grade)}}>Edit Quiz</Button>
          </a>
        <Table striped bordered hover style={{width : '100%',justifyContent:'center',marginTop : 20 ,padding:20}}>
            <thead>
                <tr>
                    <th>Class Name</th>
                    <th>Class Type</th>
                    <th>Grade</th>
                    <th>option</th>               
                </tr>
            </thead>
            <tbody>

            {Quiz.map((elm,i) => (
                <tr key = {i} style={{textAlign : 'center',fontWeight : '400'}}>
                        <td>{elm.ModuleID}</td>
                        <td>{elm.TeacherID}</td>
                        <td>{elm.Grade}</td>
                        <td><Button variant="outline-primary" onClick={() => {StartQuiz(elm._id)}}>Start Quiz</Button>
                        <Button style={{marginLeft:'20px',fontWeight : 'bold'}} onClick={() => {ShowResult(elm._id)}}>See Results</Button> </td>
                    </tr>
            ))}
            </tbody>
        </Table>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Assignment</Accordion.Header>
        <Accordion.Body>
        {Assignment.map((e,i) => (
            <>
            <div onClick={() =>submit(e)} style={{marginLeft:'20px', padding:'10px'}}>
                {e.AssignmentTopic} <br></br>
                <hr></hr>
            </div>
            </>
          ))}
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

    </>
  )
}

export default ModulePage