import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Payments from './Payments';

function OwnerS() {
  const i =10;
  return (
    <>
    <Payments/>
   <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
    <h1>Owner Shares</h1>
    <Form>
          <Form.Group className="mb-3" > 
            <Form.Label>Select the Basis</Form.Label>
              <Form.Select required >
                <option value='internet'>Monthly</option>
                <option value='other'>Class wise</option>
              </Form.Select>
            </Form.Group>
      </Form>
      <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Index</th>
            <th>Category</th>
            <th>Description</th>
            <th>Account</th>
            <th>Payment Date</th>
            </tr>
        </thead>
        <tbody>
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
    
        </tbody>
        </Table>

   </Container>
   </>
  )
}

export default OwnerS