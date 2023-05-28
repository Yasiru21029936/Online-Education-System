import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios'
import Staff from './Staff';

function ProvideLogin() {

    const location = useLocation();

    const [FirstName,setFirstName] = useState();
    const [LastName,setLastName] = useState();
    const [NameWithInitials,setNameWithInitials] = useState();
    const [Nic,setNic] = useState();
    // const [RegistrationID,setRegistrationID] = useState();
    const [Email,setEmail] = useState();
    const [MobileNumber,setMobileNumber] = useState();
    const [Address,setAddress] = useState();
    const [BasicSalary,setBasicSalary] = useState();
    const [UserName,setUserName] = useState();
    const [Password,setPassword] = useState();
    const [Status,setStatus] = useState('Approved');
    const [id,setID] = useState();
    const [details,setDetails] = useState();

    const navigate = useNavigate();

    // To get data from location
    useEffect(() => {

        console.log(location.state.props)
        const details = location.state.props;
        setDetails(details)
        console.log(details.fName);

        setFirstName(details.fName);
        setLastName(details.lName);
        setNameWithInitials(details.nameWithInitials);
        setNic(details.NIC);
        setEmail(details.Email);
        setMobileNumber(details.MNumber);
        setAddress(details.AddressLine01 +" / "+ details.AddressLine01);
        setLastName(details.fName);
        setLastName(details.fName);
        setLastName(details.fName);
        setID(details._id)

    }, [])

    const validate = async(e) =>{
        e.preventDefault();

        details.status = Status;

        
        
        const dataForUsers = {
            fName : FirstName,
            MNumber:MobileNumber,
            Username : UserName,
            Password : Password,
            Email :Email,
            role :'Teacher'
            }
            
        if(Status === 'Approved'){
            // update teacher details
            await axios.put("http://localhost:8080/registrationTeacher/updateTeacherStatus",details).then(res =>{
                console.log(res.data.status);
            }).catch(err =>{
                alert(err,"This is the error")
            })
            
            // Insert Teacher as a user
            await axios.post("http://localhost:8080/authUser/RegisterUser",dataForUsers).then((res) =>{
                alert(res.data.status)
                navigate(-1);
            }).catch(err =>{
                alert( "There is an existing user by this user name; use different user name")
            })
        }else{
            await axios.put("http://localhost:8080/registrationTeacher/updateTeacherStatus",details).then(res =>{
                console.log(res.data.status);
                alert('Teacher Rejected')
                navigate(-1)
            }).catch(err =>{
                alert(err,"This is the error")
            })
        }

    }
    


  return (
        <>
    <Staff/>
    
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>
 
    <Form onSubmit={validate}>
        <h4 style={{fontWeight:'bold'}}>Update Teacher Status</h4>
        <br></br>  
        <hr></hr>
        <Form.Group className="mb-3" >
              <Form.Label>Update status to :</Form.Label>
              <Form.Select value = {Status} onChange={(e) =>{setStatus(e.target.value)}} required >
                <option value='Approved' selected>approved</option>
                <option value='Rejected'>Rejected</option>
              </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your first Name" value = {FirstName} onChange={(e) =>{setFirstName(e.target.value)}} readOnly required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Last Name" value = {LastName} onChange={(e) =>{setLastName(e.target.value)}} readOnly required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name with initials</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Full Name" value = {NameWithInitials} onChange={(e) =>{setNameWithInitials(e.target.value)}} readOnly required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" placeholder="Enter Your NIC" value = {Nic} onChange={(e) =>{setNic(e.target.value)}} readOnly required/>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Registration ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Registration ID" value = {RegistrationID} onChange={(e) =>{setRegistrationID(e.target.value)}} required/>
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Email" value = {Email} onChange={(e) =>{setEmail(e.target.value)}} readOnly required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Mobile Number" value = {MobileNumber} onChange={(e) =>{setMobileNumber(e.target.value)}} readOnly required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Address" value = {Address} onChange={(e) =>{setAddress(e.target.value)}} readOnly required/>
        </Form.Group>

        {Status === 'Approved' ? (
            <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Basic Salary</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Basic Salary" value = {BasicSalary} onChange={(e) =>{setBasicSalary(e.target.value)}} required/>
        </Form.Group>
            <h4 style={{fontWeight:'bold'}}>Login details</h4>
            <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your User Name" value = {UserName} onChange={(e) =>{setUserName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" value = {Password} onChange={(e) =>{setPassword(e.target.value)}} required/>
        </Form.Group>
            </>
            ):<></>}

        <Button variant="primary" type="save" style={{width:'20%'}}>
            Save
        </Button>
    </Form>
    </Container>
    </>
  )
}

export default ProvideLogin