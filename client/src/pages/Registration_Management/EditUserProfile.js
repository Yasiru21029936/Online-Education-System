import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'

function EditUserProfile() {
    const[fName, setfName] = useState();
    const[lName, setlName] = useState();
    const[nameWithInitials,setNameWithInitials] = useState();
    const[NIC,setNIC] = useState();
    const[DOB,setDOB] = useState();
    const[Gender,setGender] = useState();
    const[Email, setEmail] = useState();
    const[MNumber, setMNumber] = useState();
    const[MWNumber, setMWNumber] = useState();
    const[AddressLine01, setAddressLine01] = useState();
    const[AddressLine02, setAddressLine02] = useState();
    const[City, setCity] = useState();
    const[School, setSchool] = useState();
    const[GName, setGName] = useState();
    const[GOccupation, setGOccupation] = useState();
    const[GContact, setGContact] = useState();
    const[Username, setUsername] = useState();
    const [id,setId] = useState()

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() =>{
        try{
                const regData = location.state.data;
                console.log(location.state.data);
                setfName(regData.fName);
                setlName(regData.lName);
                setNameWithInitials(regData.nameWithInitials);
                setNIC(regData.NIC);
                setDOB(regData.DOB);
                setGender(regData.Gender);
                setEmail(regData.Email);
                setMNumber(regData.MNumber);
                setMWNumber(regData.MWNumber);
                setAddressLine01(regData.AddressLine01);
                setAddressLine02(regData.AddressLine02);
                setCity(regData.City);
                setSchool(regData.School);
                setGName(regData.GName);
                setGOccupation(regData.GOccupation);
                setGContact(regData.GContact);
                setUsername(regData.Username);
                setId(regData._id);
               
        }catch(error){
                navigate(-1);
        }
    },[])

    const validate =(e) => {
        e.preventDefault();

        const dataSample ={
                fName,
                lName,
                nameWithInitials,
                NIC,
                DOB,
                Gender,
                Email,
                MNumber,
                MWNumber,
                AddressLine01,
                AddressLine02,
                City,
                School,
                GName,
                GOccupation,
                GContact,
                Username,
                id
        }

        console.log(dataSample);
        
    axios.put('http://localhost:8080/authUser/update',dataSample).then((res) =>{
        alert("Profile Updated!");
        console.log(res.state)
        navigate(-1);
    }).catch(err =>{
        alert(err)
    })
}


  return (
    <Container style={{marginTop : '3%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <Form onSubmit={(e) =>{validate(e)}}>
        <h4 style={{fontWeight:'bold'}}>Edit User Profile admin</h4>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" value = {fName}  onChange ={(e) => setfName(e.target.value)} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" value = {lName}  onChange ={(e) => setlName(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name with initials</Form.Label>
            <Form.Control type="text" value = {nameWithInitials}  onChange ={(e) => setNameWithInitials(e.target.value)} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" value = {NIC}  onChange ={(e) => setNIC(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" value = {Email}  onChange ={(e) => setEmail(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text" value = {MNumber}  onChange ={(e) => setMNumber(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Whatsapp number</Form.Label>
            <Form.Control type="text" value = {MWNumber}  onChange ={(e) => setMWNumber(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address line-01</Form.Label>
            <Form.Control type="text" value = {AddressLine01}  onChange ={(e) => setAddressLine01(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address line-02</Form.Label>
            <Form.Control type="text" value = {AddressLine02}  onChange ={(e) => setAddressLine02(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" value = {City}  onChange ={(e) => setCity(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>School</Form.Label>
            <Form.Control type="text" value = {School}  onChange ={(e) => setSchool(e.target.value)} required/>
        </Form.Group>

        {/* Guardian information */}
        <h4 style={{fontWeight:'bold'}}>Guardian's details</h4>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Guardian's name</Form.Label>
            <Form.Control type="text" value = {GName}  onChange ={(e) => setGName(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Guardian's occupation</Form.Label>
            <Form.Control type="text" value = {GOccupation}  onChange ={(e) => setGOccupation(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Guardian's contact number</Form.Label>
            <Form.Control type="text" value = {GContact}  onChange ={(e) => setGContact(e.target.value)} required/>
        </Form.Group>

        <h4 style={{fontWeight:'bold'}}>Login details</h4>
        <hr></hr>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" value = {Username}  onChange ={(e) => setUsername(e.target.value)} required/>
        </Form.Group>
        
      <Button variant="primary" type="submit" style={{width:'20%', marginTop:'2%', marginBottom:'2%'}}>
            {/* <a href='/Admin' style={{textDecoration:'none', color:'white'}}>Save Changes</a> */}
            Save Changes
      </Button>
        
      </Form>

    </Container>
  )
}

export default EditUserProfile