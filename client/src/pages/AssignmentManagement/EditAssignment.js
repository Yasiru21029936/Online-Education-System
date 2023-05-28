import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Assignment from '../AssignmentManagement/Assignment'
import Button from 'react-bootstrap/Button';
import {useLocation, useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios'


function EditAssignment() {

  const [CName,setCName] = useState()
  const [CType,setCType] = useState()
  const [Grade,setGrade] = useState()
  const [AssignmentID,setAid] = useState()
  const [AssignmentTopic,setTopic] = useState()
  const [AssignmentDesc,setDesc] = useState()
  const [DueDate,setDueDate] = useState()
  const [File,setFile] = useState()
  const [id,setId] = useState()

  const location = useLocation();
  const navigate = useNavigate();


  const DateFormat = (date) =>{
    var d = new Date(date);

    var date = ("0" + (d.getDate())).slice(-2);
    var month = ("0" + (d.getMonth() + 1)).slice(-2);
    var year = d.getFullYear();
    // var newDate = date + "-" + month + "-" + year;
    var newDate =  year+"-" +month+"-" +date ;

    return newDate;

}


  useEffect(() => {
    try {
        
      const assignmentData = location.state.data;
      console.log(location.state.data);
      setCName(assignmentData.CName);
      setCType(assignmentData.CType);
      setGrade(assignmentData.Grade);
      setAid(assignmentData.AssignmentID);
      setTopic(assignmentData.AssignmentTopic);
      setDesc(assignmentData.AssignmentDesc);
      setDueDate(DateFormat(assignmentData.DueDate));
      // axios.get('http://localhost:8080/Assests/UploadedAssignmentsByTeacher/'+assignmentData.File).then((res) =>{
      //   setFile(res);
      // })
      setId(assignmentData._id);
  

    } catch (error) {
        navigate(-1);
        
    }
    
}, [])

const validate=(e) =>{
  e.preventDefault();

  const dataSample = {
    CName,
    CType,
    Grade,
    AssignmentID,
    AssignmentTopic,
    AssignmentDesc,
    DueDate,
    File,
    id
      
  }

  console.log(dataSample);

  axios.put('http://localhost:8080/AddAssignment/update',dataSample).then((res) =>{
      alert("Assignemnt Updated!");
      console.log(res.state)
      navigate(-1);

      
  }).catch(err =>{
      alert(err)
  })
}

  

  return (
    <>
    <Assignment/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>

      <h1>Edit Assignment</h1>
      <br></br>
      
      <Form onSubmit = {(e) => {validate(e)}}>

      <Form.Label>Class Name</Form.Label>
          <Form.Select value = {CName} onChange = {(e) => setCName(e.target.value)} required >
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

          <Form.Label>Class Type</Form.Label>
          <Form.Select value = {CType} onChange = {(e) => setCType(e.target.value)} required >
                <option>Select Class Type</option>
                <option value = 'A/L reguler'>A/L reguler</option>
                <option value = 'A/L revision'>A/L revision</option>
                <option value='OL'>OL</option>
                <option value='Paper'>Paper</option>
                <option value='Other'>Other</option>
          </Form.Select>
          
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

      <Form.Label>Assignment ID</Form.Label>
        <Form.Control type="text" value = {AssignmentID}  onChange ={(e) => setAid(e.target.value)} required/>


      <Form.Label>Assignment Tpoic</Form.Label>
        <Form.Control type="text" placeholder="Enter Assignment Tpoic" value = {AssignmentTopic} onChange ={(e) => setTopic(e.target.value)} required/>

        <Form.Label>Assignment Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" value = {AssignmentDesc} onChange ={(e) => setDesc(e.target.value)} required/>

      <Form.Label>Enter Due Date</Form.Label>
        <Form.Control type="date" placeholder="Due Date" value = {DueDate} onChange ={(e) => setDueDate(e.target.value)} required/>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Add files</Form.Label>
        <Form.Control type="file" value = {File} onChange ={(e) => setFile(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save Changes
      </Button>

      </Form>

    </Container>
    </>
  )
}

export default EditAssignment