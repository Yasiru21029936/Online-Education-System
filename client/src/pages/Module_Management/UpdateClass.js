import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import Classes from './Classes';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateClass() {

  const [ClassName, setClassName] = useState();
  const [ClassType, setClassType] = useState();
  const [Grade, setGrade] = useState();
  const [ClassDate, setClassDate] = useState();
  const [ClassStartTime, setClassStartTime] = useState();
  const [ClassEndTime, setClassEndTime] = useState();
  const [ClassFees, setClassFees] = useState();
  const [uploadRec, setuploadRec] = useState();
  const [TeacherName, setTeacherName] = useState();
  const [TeacherMobile, setTeacherMobile] = useState();
  const [TeacherEmail, setTeacherEmail] = useState();
  const [id, setId] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try{
      const classData = location.state.data;
      console.log(location.state.data);

      setClassName(classData.CName);
      setClassType(classData.CType);
      setGrade(classData.Grade);
      setClassDate(classData.CDate);
      setClassStartTime(classData.CSTime);
      setClassEndTime(classData.CETime);
      setClassFees(classData.CFees);
      setuploadRec(classData.uploadRec);
      setTeacherName(classData.TName);
      setTeacherMobile(classData.TMobile);
      setTeacherEmail(classData.TEmail);
      
      setId(classData._id);

    } catch(error) {
      navigate(-1);
    }
  }, [])

  const validate = (e) => {
    e.preventDefault();

    const dataSample = {
      ClassName,
      ClassType,
      Grade,
      ClassDate,
      ClassStartTime,
      ClassEndTime,
      ClassFees,
      uploadRec,
      TeacherName,
      TeacherMobile,
      TeacherEmail,
      id
    }

    console.log(dataSample);

    axios.put('http://localhost:8080/Class/update',dataSample).then((res) =>{
      alert("Class Updated!");
      console.log(res.state)
      navigate(-1);

  }).catch(err =>{
    alert(err)
  })
}
  

  return (
    <>
    <Classes/>

    <Container style={{marginTop:'1%', display: 'block', width : '50%',justifyContent : 'center'}}>
    <Form onSubmit = {(e) => {validate(e)}}>
      <h4 style={{fontWeight: 'bold'}}>Update Module</h4>
      <br></br>
      <hr></hr>
      <Form.Group className="mb-3" >
        <Form.Label>Class Name</Form.Label>
          <Form.Select value = {ClassName} onChange = {(e) => setClassName(e.target.value)} required >
                <option>Select Class Name</option>
                <option value = 'Combined Maths 2022'>Combined Maths 2022</option>
                <option value = 'Combined Maths 2023'>Combined Maths 2023</option>
                <option value = 'Combined Maths 2024'>Combined Maths 2024</option>
                <option value = 'Physics 2022'>Physics 2022</option>
                <option value = 'Physics 2023'>Physics 2023</option>
                <option value = 'Physics 2024'>Physics 2024</option>
                <option value='Chemistry 2022'>Chemistry 2022</option>
                <option value='Chemistry 2023'>Chemistry 2023</option>
                <option value='Chemistry 2024'>Chemistry 2024</option>
                <option value='Biology 2022'>Biology 2022</option>
                <option value='Biology 2023'>Biology 2023</option>
                <option value='Biology 2024'>Biology 2024</option>
                <option value='Mathematics'>Mathematics</option>
                <option value='Science'>Science</option>
                <option value='Commerce'>Commerce</option>
                <option value='English'>English</option>
                <option value='ICT'>ICT</option>
                <option value='Other'>Other</option>

          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Class Type</Form.Label>
          <Form.Select value = {ClassType} onChange = {(e) => setClassType(e.target.value)} required >
                <option>Select Class Type</option>
                <option value = 'A/L reguler'>A/L reguler</option>
                <option value = 'A/L revision'>A/L revision</option>
                <option value='OL'>OL</option>
                <option value='Paper'>Paper</option>
                <option value='Other'>Other</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label>Grade</Form.Label>
          <Form.Select value = {Grade} onChange = {(e) => setGrade(e.target.value)} required >
                <option>Select Grade</option>
                <option value = 'Grade 1'>Grade 1</option>
                <option value = 'Grade 2'>Grade 2</option>
                <option value='Grade 3'>Grade 3</option>
                <option value='Grade 4'>Grade 4</option>
                <option value='Grade 5'>Grade 5</option>
                <option value='Grade 6'>Grade 6</option>
                <option value='Grade 7'>Grade 7</option>
                <option value='Grade 8'>Grade 8</option>
                <option value='Grade 9'>Grade 9</option>
                <option value='Grade 10'>Grade 10</option>
                <option value='Grade 11'>Grade 11</option>
                <option value='Grade 12'>Grade 12</option>
                <option value='Grade 13'>Grade 13</option>
                <option value='Other'>Other</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Class Date</Form.Label>
          <Form.Select value = {ClassDate} onChange = {(e) => setClassDate(e.target.value)} required >
                <option>Select Date</option>
                <option value = 'Sunday'>Sunday</option>
                <option value = 'Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
                <option value='Saturday'>Saturday</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className= "mb-3" controlId= "formBasicEmail">
        <Form.Label>Class Start Time</Form.Label>
        <Form.Control type= "time" value = {ClassStartTime} onChange = {(e) => setClassStartTime(e.target.value)} required/>
      </Form.Group>

      <Form.Group className= "mb-3" controlId= "formBasicEmail">
        <Form.Label>Class End Time</Form.Label>
        <Form.Control type= "time" value = {ClassEndTime} onChange = {(e) => setClassEndTime(e.target.value)} required/>
      </Form.Group>

      <Form.Group className= "mb-3" controlId= "formBasicEmail">
        <Form.Label>Class Fees</Form.Label>
        <Form.Control type= "text" value = {ClassFees} onChange = {(e) => setClassFees(e.target.value)} required/>
      </Form.Group>

      <Form.Group className= "mb-3" controlId= "formBasicEmail" value = {uploadRec} onChange={(e) => setuploadRec(e.target.value)}>
        <Form.Label>Upload Recordings</Form.Label>
        <br></br>
        <Form.Check
        inline
        label= "Yes"
        name= "group1"
        type= "radio"
        value = "Yes"
        />
        <Form.Check
        inline
        label= "No"
        name= "group1"
        type= "radio"
        value = "No"
        />
      </Form.Group>

      <br></br>
      <hr></hr>
      <h6 style={{fontWeight: 'bold'}}>Teacher Details</h6>

      <Form.Group className= "mb-3" controlId= "formBasicEmail">
        <Form.Label>Name of the Teacher</Form.Label>
        <Form.Control type= "text" value = {TeacherName} onChange = {(e) => setTeacherName(e.target.value)} required/>
      </Form.Group>

      <Form.Group className= "mb-3" controlId= "formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type= "text" value = {TeacherMobile} onChange = {(e) => setTeacherMobile(e.target.value)} required/>
      </Form.Group>

      <Form.Group className= "mb-3" controlId= "formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type= "email" value = {TeacherEmail} onChange = {(e) => setTeacherEmail(e.target.value)} required/>
      </Form.Group>

      <Button variant= "primary" type= "save" style={{width: '20%'}}>
        Update
      </Button>

      

    </Form>
    </Container>
    
    </>

  )
}

export default UpdateClass