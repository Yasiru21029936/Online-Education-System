import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/esm/Table';
import Assignment from '../AssignmentManagement/Assignment'

function SubmitAssignment() {

  
  const location = useLocation();
  
  const [DueDate,setDueDate] = useState();

  
  return (
    <>
    <Assignment/>
    <div className="tbl">

      <center>

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
          <td> {DueDate}</td>
          
        </tr>

        <tr>
          <td>Last modified</td>
          <td>Larry the Bird</td>
          
        </tr>

        <tr>
          <td>Submission comments	
        </td>
          <td>Larry the Bird</td>
          
        </tr>
      </tbody>
    </Table>

    <Link to = "/SubmitAssignment/SubmitionPage"><Button variant="primary" type="submit">
        Add Submissions
      </Button></Link>

      </center>

    </div>
    </>
  )
}

export default SubmitAssignment