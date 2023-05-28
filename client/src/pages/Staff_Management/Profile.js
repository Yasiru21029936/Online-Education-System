import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import Staff from './Staff';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const Role = useRef();
    const firstName = useRef();
    const lastName = useRef();
    const MNumber = useRef();
    const Username = useRef();
    const password = useRef();
    const email = useRef();

    const navigate = useNavigate();

    const validate = async(e) =>{
        e.preventDefault();

        const data = {
            fName : firstName.current.value + " " + lastName.current.value,
            MNumber :MNumber.current.value,
            Username : Username.current.value,
            Password:password.current.value,
            role:Role.current.value,
            Email:email.current.value
        }

        await axios.post("http://localhost:8080/authUser/RegisterUser",data).then((res) =>{
            alert(res.data.status)
            navigate(-1);
        }).catch(err =>{
            // alert(err)
            alert( "There is an existing user by this user name; use different user name")
        })
    }


  return (
    <>
    <Staff/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>

    <Form onSubmit={validate}>
        <h1 style={{fontWeight:'bold'}}><center>Provide Access</center></h1>
        <br></br>
        <hr></hr>
        <Form.Group className="mb-3" >
              <Form.Label>Employee Type</Form.Label>
              <Form.Select  ref = {Role} required >
                <option></option>
                <option value = 'Staff'>Staff</option>
                <option value = 'SupportStaff'>Support Staff</option>
                <option value='Temporary'>Temporary</option>``
                <option value='Admin'>Admin</option>
              </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" ref = {firstName} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" ref = {lastName} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" ref = {email} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text" ref = {MNumber} maxLength={10} minLength ={10} required/>
        </Form.Group>

        <h4 style={{fontWeight:'bold'}}>Login details</h4>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" ref = {Username} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref = {password} required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>
    </Container> 
    </>
    

  )
}

export default Profile