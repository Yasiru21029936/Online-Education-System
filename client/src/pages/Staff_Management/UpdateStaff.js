import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Staff from './Staff';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

function UpdateStaff() {


    const [Role,setRole]= useState();
    const [firstName,setfirstName]= useState();
    const [lastName,setlastName]= useState();
    const [MNumber,setMNumber]= useState();
    const [Username,setUsername]= useState();
    const [password,setPassword]= useState();
    const [id,setId]= useState();
    const [email,setemail]= useState();

    const location = useLocation();
    
    useEffect(() => {
        const data = location.state.props;
        console.log(data);
        setfirstName(data.name)
        setlastName(data.name)
        setemail(data.Email)
        setMNumber(data.mobile)
        setRole(data.Role);
        setId(data._id)
        setPassword(data.password)
        setUsername(data.userName)

    }, [])
    

    const navigate = useNavigate();

    const validate = async(e) =>{
        e.preventDefault();

        const data = {
            fName : firstName,
            MNumber :MNumber,
            Username : Username,
            role:Role,
            Email:email,
            Password:password,
            id
        }

        await axios.put("http://localhost:8080/authUser/updateUser",data).then((res) =>{
            alert(res.data.status)
            navigate(-1);
        }).catch(err =>{
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
              <Form.Select  value = {Role} onChange = {(e) =>{setRole(e.target.value)}} required >
                <option value = 'Staff'>Staff</option>
                <option value = 'Teacher'>Teacher</option>
                <option value = 'student'>student</option>
                <option value = 'SupportStaff'>Support Staff</option>
                <option value='Temporary'>Temporary</option>``
                <option value='Admin'>Admin</option>
              </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" value = {firstName} onChange = {(e) =>{setfirstName(e.target.value)}} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" value = {lastName} onChange = {(e) =>{setlastName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" value = {email} onChange = {(e) =>{setemail(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text" value = {MNumber} maxLength={10} minLength ={10} onChange = {(e) =>{setMNumber(e.target.value)}} required/>
        </Form.Group>

        <h4 style={{fontWeight:'bold'}}>Login details</h4>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" value = {Username} onChange = {(e) =>{setUsername(e.target.value)}} required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{marginBottom:20}}>
            Update Employee
        </Button>
    </Form>
    </Container> 
    </>
    

  )
}

export default UpdateStaff