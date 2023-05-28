import React from 'react'
import Table from 'react-bootstrap/Table';
import '../../Styles/allSubmitions.css';
import Button from 'react-bootstrap/Button';
import Assignment from '../AssignmentManagement/Assignment'
import generatePDF from '../../pages/AssignmentManagement/ReportGenerator'

function AllSubmitions() {
  return (
    <>
    <Assignment/>
    <div>AllSubmitions

    <Button onClick={() => generatePDF} 
      type='submit'style={{fontWeight : 'bold', marginLeft:'16px'}}>
            Download
        </Button>

      <Table striped bordered hover size="sm" style={{width : '70%',justifyContent : 'center',marginTop : 20}}>
        <tbody>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Submition</th>
          </tr>

          <tr>
          <td>Submitted</td>
          <td>20</td>
          <td>20</td>
         
        </tr>
        </tbody>
      </Table>
    </div>
    </>
  )
}

export default AllSubmitions