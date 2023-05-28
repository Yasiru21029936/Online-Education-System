import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios';
import { UserDetails } from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function RegistrationForm_st() {

    const[fName, setfName] = useState();
    const[lName, setlName] = useState();
    const[nameWithInitials,setNameWithInitials] = useState();
    const[NIC,setNIC] = useState();
    const[Gender, setGender] = useState();
    const[DOB, setDOB] = useState();
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
    const[Password, setPassword] = useState();
    const[CPassword, setCPassword] = useState();

    const navigate = useNavigate();

    // user global context
    const {user,setUser} = UserDetails();

    const Validate = (e) =>{
        e.preventDefault();

        if(Password !== CPassword){
            alert('Confirm Password must be the same password')
        }else{
            const formData = {
                fName,
                lName,
                nameWithInitials,
                NIC,
                Gender,
                DOB,
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
                Password,
                CPassword,
                role : 'student'
            }
                console.log(formData);
                axios.post("http://localhost:8080/authUser/RegisterStudent",formData).then(res =>{
                    // localStorage.setItem('user',res.data.token);
                    // setUser(res.data.user)
                    toast.success('Student Registration Successfully!')
                    navigate('/Login')
                }).catch(err =>{
                    toast("Use a different User name | User Exists in this user name")
                    // alert(err)
            })
        }
    }

  return (
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <h1>Student registration form</h1>
    <Form onSubmit = {Validate}>
        {/* Personal information */}
        <h4 style={{fontWeight:'bold'}}>Personal details</h4>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" onChange={(e) =>{setfName(e.target.value)}} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" onChange={(e) =>{setlName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name with initials</Form.Label>
            <Form.Control type="text" placeholder="Enter your name with initials" onChange={(e) =>{setNameWithInitials(e.target.value)}} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" placeholder="Enter your NIC number" onChange={(e) =>{setNIC(e.target.value)}} required maxLength={12} minLength ={10}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e) =>{setGender(e.target.value)}} required>
            <Form.Label>Gender</Form.Label>
            <br/>
            <Form.Check
            inline
            label="Male"
            name="group1"
            type= "radio"
            value= "Male"
            // id={`inline-${type}-1`}            
          />
            <Form.Check
            inline
            label="Female"
            name="group1"
            type= "radio"
            value= "Female"
            // id={`inline-${type}-1`}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Birthday</Form.Label>
            <Form.Control type="date" placeholder="enter birthday" onChange={(e) =>{setDOB(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter your e-mail" onChange={(e) =>{setEmail(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text" placeholder="Enter your mobile number" onChange={(e) =>{setMNumber(e.target.value)}} required maxLength={10} minLength ={10}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Whatsapp number</Form.Label>
            <Form.Control type="text" placeholder="Enter your whatsapp number" onChange={(e) =>{setMWNumber(e.target.value)}} required maxLength={10} minLength ={10}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address line-01</Form.Label>
            <Form.Control type="text" placeholder="Enter your address line-01" onChange={(e) =>{setAddressLine01(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address line-02</Form.Label>
            <Form.Control type="text" placeholder="Enter your Address line-02" onChange={(e) =>{setAddressLine02(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter your City" onChange={(e) =>{setCity(e.target.value)}}required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>School</Form.Label>
            <Form.Control type="text" placeholder="Enter your School" onChange={(e) =>{setSchool(e.target.value)}}required/>
        </Form.Group>

        {/* Guardian information */}
        <h4 style={{fontWeight:'bold'}}>Guardian's details</h4>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Guardian's name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Guardian's name" onChange={(e) =>{setGName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Guardian's occupation</Form.Label>
            <Form.Control type="text" placeholder="Enter your Guardian's occupation" onChange={(e) =>{setGOccupation(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Guardian's contact number</Form.Label>
            <Form.Control type="text" placeholder="Enter your Guardian's contact number" onChange={(e) =>{setGContact(e.target.value)}}required  maxLength={10}/>
        </Form.Group>

        {/* Login details */}

        <h4 style={{fontWeight:'bold'}}>Login details</h4>
        <hr></hr>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your login Username" onChange={(e) =>{setUsername(e.target.value)}}required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" onChange={(e) =>{setPassword(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirm passsword</Form.Label>
            <Form.Control type="password" placeholder="Re-enter your password" onChange={(e) =>{setCPassword(e.target.value)}} required/>
        </Form.Group>
        
        <Button variant="primary" type="submit" style={{width:'20%'}} >
            Submit
        </Button>
        <br></br>
        <br></br>
    </Form>

    <ToastContainer position="top-center" autoClose={500} hideProgressBar/>
    </Container>
  )
}

export default RegistrationForm_st