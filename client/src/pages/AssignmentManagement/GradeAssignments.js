import React from 'react'
import Table from 'react-bootstrap/Table';
import '../../Styles/assignmentResult.css';
import Assignment from '../AssignmentManagement/Assignment'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function GradeAssignments() {
  return (
    <>
    <Assignment/>
    <div>
      <h1>Submissions</h1>
      <center>
      <div className="tbl" >
      <Table striped bordered hover size="sm" style={{width : '70%',justifyContent : 'center',marginTop : 20}}>
        <tbody>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Status</th>
          <th>Grade</th>
          <th>Post</th>
          </tr>

          <tr>
          <td>001</td>
          <td>Kanishka Kumarasiri</td>
          <td>Submitted</td>
          <td><Form><Form.Control type="text" placeholder="Grade" />
        </Form></td>
        <td><Button type="submit">POSt</Button></td>
         
        </tr>
        </tbody>
      </Table>
      </div>
      </center>
    </div>
    </>
  )
}

export default GradeAssignments