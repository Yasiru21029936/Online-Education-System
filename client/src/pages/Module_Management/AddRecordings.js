import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Classes from './Classes';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function AddRecordings() {

  const [ClassName, setClassName] = useState();
  const [ClassType, setClassType] = useState();
  const [Grade, setGrade] = useState();
  const [LessonName, setLessonName] = useState();
  const [Recording, setRecording] = useState();
  const location = useLocation();
  const Navigate = useNavigate();

  const {
    Class,
    Grad,
    Type
  } = location.state.props;
  console.log(location.state.props);

  useEffect(() => {
    setClassName(location.state.props.ClassName)
    setClassType(location.state.props.ClassType)
    setGrade(location.state.props.Grade)
  })

  const AddRecordings = (e) => {
    e.preventDefault();

    const formData = {
      ClassName,
      ClassType,
      Grade,
      LessonName,
      Recording
    }

    console.log(formData)

    axios.post("http://localhost:8080/Recordings/addRecordings", formData).then(res=>{
      alert("Data added successfully")
      Navigate(-1)
    }).catch(e => {
      alert(e)
    })
  }

  return (
    <>
    <Classes/>

    <Container style={{marginTop:'1%', display: 'block', width : '50%',justifyContent : 'center'}}>
    <Form onSubmit={AddRecordings}> 

        <h4 style={{fontWeight: 'bold'}}>Add Recordings</h4>
        <br></br>
        <hr></hr> 

    <Form.Group className="mb-3" >
          <Form.Label>Class Name</Form.Label>
            <Form.Select value={ClassName} onChange = {(e) => {setClassName(e.target.value)}} required >
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
            <Form.Select value={ClassType} onChange = {(e) => {setClassType(e.target.value)}} required>
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
            <Form.Select  value={Grade} onChange = {(e) => {setGrade(e.target.value)}} required>
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

        <Form.Group className= "mb-3" controlId= "formBasicEmail">
        <Form.Label>Lesson Name</Form.Label>
        <Form.Control type= "text" onChange = {(e) => {setLessonName(e.target.value)}} required/>
      </Form.Group>

      <Form.Group className= "mb-3" controlId= "formBasicEmail">
        <Form.Label>Recording</Form.Label>
        <Form.Control type= "text" onChange = {(e) => {setRecording(e.target.value)}} required/>
      </Form.Group>

        <Button varient= "primary" type= "submit">
          Submit
        </Button>
        
      </Form>
    </Container>
<br></br>
    </>
  )
}

export default AddRecordings