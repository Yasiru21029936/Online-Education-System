import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
//import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Userprofile from './Userprofile';
import { UserDetails } from '../../context/UserContext';



function StProfile() {

        const {user,setUser} = UserDetails();
        
        const [fname,setFname] = useState(user.name);
        const [lname,setLname] = useState();
        const [address,setAddress] = useState();
        const [mobile,setMobile] = useState();
        const [wmoble,setWmobile] = useState();
        
        
        useEffect(() => {
                
                console.log(user);
                
                // setFname(user.name)
          
        }, [])    
  return (
        <>
        <Userprofile/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>  

    <h1>User profile</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" value = {fname}/>               
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Address </Form.Label>          
                <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Mobile number</Form.Label>
                <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Whatsapp number</Form.Label>
                <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" />
        </Form.Group>

      <Button variant="primary" type="submit" style={{width:'20%'}}>
            <a href='/EditUserProfile' style={{textDecoration:'none', color:'white'}}>Edit profile</a>
      </Button>
    </Container>
    </>
  )
}

export default StProfile

 // const[fName, setfName] = useState();
        // const[lName, setlName] = useState();
        // const[Address, setAddress] = useState();
        // const[Mobile, setMobile] = useState();
        // const[WhtsNumber, setWhtsNumber] = useState();
        // const[Username, setUsername] = useState();


{/* <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" value = {fName} onChange = {(e) => {setfName(e.target.value)}} />               
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text"value = {lName} onChange = {(e) => {setlName(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Address </Form.Label>          
                <Form.Control type="text" value = {Address} onChange = {(e) => {setAddress(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Mobile number</Form.Label>
                <Form.Control type="text" value = {Mobile} onChange = {(e) => {setMobile(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Whatsapp number</Form.Label>
                <Form.Control type="text" value = {WhtsNumber} onChange = {(e) => {setWhtsNumber(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" value = {Username} onChange = {(e) => {setUsername(e.target.value)}}/>
        </Form.Group>

      <Button variant="primary" type="submit" style={{width:'20%'}}>
            <a href='/EditUserProfile' style={{textDecoration:'none', color:'white'}}>Edit profile</a>
      </Button> */}