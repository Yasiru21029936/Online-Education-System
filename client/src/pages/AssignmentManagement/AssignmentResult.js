import React from 'react'
import { Link } from 'react-router-dom'
import Assignment from '../AssignmentManagement/Assignment'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../../Styles/assignmentResult.css';

function AssignmentResult() {
  return (
    <>
    <Assignment/>
    <div>
      
      
      <h3>Grading status</h3>
      <br></br>
      <center>
      <div className="tbl" >

        
      <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td>Participants</td>
          <td>100</td>
          
        </tr>
        <tr>
          <td>Submitted</td>
          <td>20</td>
         
        </tr>
        <tr>
          <td>Needs grading</td>
          <td>10</td>
          
        </tr>

        <tr>
          <td>Due date</td>
          <td>2022.10.26</td>
          
        </tr>

        <tr>
          <td>Time remainig</td>
          <td>01 days 20 hours 10 Minutes 40 seconds</td>
          
        </tr>
      </tbody>
    </Table>
    

    

    </div>

    <div>

    <Link to = "/AssignmentResults/AllSubmitions"><Button variant="primary" type="submit">View all submissions</Button></Link>  <Link to = "/AssignmentResults/GradeAssignments"><Button variant="primary" type="submit">Grade</Button></Link>    
    </div>
    <br></br>

    
</center>
    </div>
    </>
  )
}

export default AssignmentResult