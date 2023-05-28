import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import {useNavigate } from 'react-router-dom';

function BillPayment() {
  
  const [BillCategory,setBillCategory] = useState();
  const [Description,setDescription] = useState();
  const [Account,setAccount] = useState();
  const [Date,setDate] = useState();
  const [billRemark,setBillRemark] = useState();
  const navigate = useNavigate();


  const validate = (e) =>{
    e.preventDefault();
    // alert('Validated')

    const formData = new FormData();
    formData.append("BillCategory",BillCategory);
    formData.append("Description",Description);
    formData.append("Account",Account);
    formData.append("Date",Date);
    formData.append("Remark",billRemark);

    // const formDadta = new FormData{
    //   BillCategory,
    //   Description,
    //   Account,
    //   Date
    // }

    console.log(Date)

    axios.post("http://localhost:8080/Bill/addBill",formData).then((res)=>{
      alert("Data Added !")

    }).catch((e)=>{
      alert(e)
    })
  }

  const Back = () =>{
    navigate("/Payments/Utility");
  }


  const fileUpload=(e) =>{
    // data.append("file", e.target.files[0]); //<-- CHANGED .value to .files[0]
    setBillRemark(e.target.files[0])
  }


  return (
    <Container  style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
            <Button variant="primary" onClick={Back}>Show All Bills</Button>
        </div>
      <h1>Utility Payments</h1>
      <Row>
        <Col>
          <Form onSubmit={(e) => {validate(e)}}>
            <Form.Group className="mb-3" >
              <Form.Label>Bill Category</Form.Label>
              <Form.Select onChange={(e) =>{setBillCategory(e.target.value)}} required >
                <option>Select a bill category</option>
           
                <option value = 'water'>Water</option>
                <option value = 'telehpone'>Telephone</option>
                <option value='internet'>Internet</option>``
                <option value='other'>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Bill Description" onChange={(e) =>{setDescription(e.target.value)}} required/>
              <Form.Text className="text-muted" >
                Enter a bill description *Note : If the bill Category is other Please enter a brief description on the Bill
              </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="accountNumber">
              <Form.Label>Acc.No/Telephone</Form.Label>
              <Form.Control type="text" placeholder="Acc.Number / Telepone No. / Bill No." onChange={(e) =>{setAccount(e.target.value)}} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="billDate">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" onChange={(e) =>{setDate(e.target.value)}} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>File remark:</Form.Label>
              <Form.Control type="file"  onChange={(e) =>{fileUpload(e)}} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Bill
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
      
  )
}

export default BillPayment