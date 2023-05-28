import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/esm/Container'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Assignment from '../AssignmentManagement/Assignment'
import ReactSearchBox from "react-search-box";
import Form from 'react-bootstrap/Form';
import generatePDF from '../AssignmentManagement/ReportGenerator'



function ManageAssignment() {
  
  const [assignment,setassignment] = useState([]);
  const [search,setSearch] = useState("");
  const navigate = useNavigate();
  const columnsPDF = [{ AssignmentID:'AssignmentID', AssignmentTopic:'AssignmentTopic' }]

  useEffect(() => {
    axios.get("http://localhost:8080/AddAssignment").then((res) =>{
      setassignment(res.data.AddAssignment);
     

    }).catch(err =>{
      alert(err)
    })

}, [assignment])

const deleteRecord = (e) =>{
  axios.delete(`http://localhost:8080/AddAssignment/delete/${e}`).then(res =>{
    alert("Assignment Deleted !")
    console.log(res.state)
  }).catch(err => {
    alert(err);
  })
}

const updateDetails =(data) =>{
  // console.table(data._id)
  navigate('/ManageAssignment/EditAssignment',{state : {data : data}})

}



  return (
    <>
    <Assignment/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>

      <h2>Manage Assignments</h2>
      <br></br>
       

      <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
      <Link to = "/Assignment/AddAssignment"><Button variant="primary" type="submit">Add new assignment</Button></Link>

      <Button onClick={() => generatePDF(assignment.map(m => ({
          AssignmentID: m.AssignmentID,
          AssignmentTopic: m.AssignmentTopic
    })), columnsPDF, false)} 
      type='submit'style={{fontWeight : 'bold', marginLeft:'16px'}}>
            Download
        </Button>
        </div>
      <br></br>



      <center>

      <Form className="d-flex" style={{width : '60%', marginTop : '-63px' }}>

            <Form.Control
              type="search"
              value = {search}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) =>{setSearch(e.target.value)}}
            />
            <Button >Search</Button>
          </Form>
          </center>

      <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
      
        <tr>
          <th>Index</th>
          <th>Assignment ID</th>
          <th>Assignment Name</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
        {assignment.filter((element)=>{
                if(search === ""){
                    return element
                }else if ((element.AssignmentTopic.toLowerCase()).includes(search.toLowerCase())){
                    return element
                }
            }).map((elem,id) =>(
                <tr key={id} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{id+1}</td>
                    <td>{elem.AssignmentID}</td>
                    <td>{elem.AssignmentTopic}</td>
                    <td>
                      <Button variant="outline-primary" onClick={() => {updateDetails(elem)}}>Edit</Button>                            <Button variant="outline-danger" onClick={() => deleteRecord(elem._id)}>Delete</Button></td>
                </tr>
            ))}
        </tbody>
      </Table>
    </Container>
    </>
  )
  
}

export default ManageAssignment