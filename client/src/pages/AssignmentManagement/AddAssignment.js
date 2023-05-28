import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Assignment from '../AssignmentManagement/Assignment'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/esm/Table'
import Button from 'react-bootstrap/Button';
import '../../Styles/addAssignment.css';
import axios from 'axios'

    

function AddAssignment() {

 
  const [CName,setCName] = useState()
  const [CType,setCType] = useState()
  const [Grade,setGrade] = useState()
  const [AssignmentID,setAid] = useState()
  const [AssignmentTopic,setTopic] = useState()
  const [AssignmentDesc,setDesc] = useState()
  const [DueDate,setDueDate] = useState()
  const [File,setFile] = useState()


  const validate = (e) =>{

    const formData = new FormData();
    formData.append("CName",CName);
    formData.append("CType",CType);
    formData.append("Grade",Grade);
    formData.append("AssignmentID",AssignmentID);
    formData.append("AssignmentTopic",AssignmentTopic);
    formData.append("AssignmentDesc",AssignmentDesc);
    formData.append("DueDate",DueDate);
    formData.append("File",File);
    
    // console.log(formData)

    axios.post("http://localhost:8080/AddAssignment/addAssignment",formData).then((res) =>{
      alert("Assignment Added Successfully!")
      console.log(res.status)
    }).catch((e) =>{
      alert("error "+ e)
    })

  }

  const fileUpload=(e) =>{
    // data.append("file", e.target.files[0]); //<-- CHANGED .value to .files[0]
    setFile(e.target.files[0])
  }

  return (
    <>
    <Assignment/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>

      <h1>Add Assignment</h1>
      <br></br>

      <Form onSubmit = {(e) => {validate(e)}}>

      <Form.Label>Class Name</Form.Label>
            <Form.Select onChange = {(e) => {setCName(e.target.value)}} required >
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
            <Form.Select onChange = {(e) => {setCType(e.target.value)}} required>
            <option>Select Class Type</option>
                <option value = 'A/L reguler'>A/L reguler</option>
                <option value = 'A/L revision'>A/L revision</option>
                <option value='OL'>OL</option>
                <option value='Paper'>Paper</option>
                <option value='Other'>Other</option>
            </Form.Select>

            <Form.Label>Grade</Form.Label>
            <Form.Select onChange = {(e) => {setGrade(e.target.value)}} required>
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
        <Form.Control type="text" placeholder="Enter Assignment ID" onChange ={(e) => setAid(e.target.value)} required/>


      <Form.Label>Assignment Tpoic</Form.Label>
        <Form.Control type="text" placeholder="Enter Assignment Tpoic" onChange ={(e) => setTopic(e.target.value)} required/>

        <Form.Label>Assignment Description</Form.Label>
        <Form.Control as="textarea" rows = {4} placeholder="Enter Description" onChange ={(e) => setDesc(e.target.value)} required/>

      <Form.Label>Enter Due Date</Form.Label>
        <Form.Control type="date" placeholder="Due Date" onChange ={(e) => setDueDate(e.target.value)} required/>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Add files</Form.Label>
        <Form.Control type="file" onChange ={(e) => {fileUpload(e)}}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      </Form>

      <br></br>
      <br></br>
      <br></br>

       {/* <h2>Submition Link</h2>
      <br></br>
      <p>Assignment Description here</p>

      <div className="tbl">

      <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td>Submission status</td>
          <td>No attempt</td>
          
        </tr>
        <tr>
          <td>Grading status</td>
          <td>Not graded</td>
         
        </tr>
        <tr>
          <td>Due date</td>
          <td></td>
          
        </tr>

        <tr>
          <td>Last modified</td>
          <td></td>
          
        </tr>

        <tr>
          <td>Submission comments	
        </td>
          <td></td>
          
        </tr>
      </tbody>
    </Table>

    

    </div> 

     <div>

    <Link to = "/Assignment/SubmitionPage"><Button variant="primary" type="submit">Add Submissions</Button></Link>
    </div>  */}

{/* <div className="tbl">

<Table striped bordered hover size="sm" style={{width : '40%',justifyContent : 'center'}}>
<tbody>
  <th style={{height : '35px',justifyContent : 'center'}}>Dashboard</th>
  <tr>
    <td >My Classes</td>
  </tr>
  <tr>
    <td>Edit Profile</td> 
  </tr>
  <tr>
    <td>Change Password</td>
  </tr>
  <tr>
    <td>Logout</td>
  </tr>

</tbody>
</Table>



</div>  */}


    </Container>
    </>
)


}

export default AddAssignment