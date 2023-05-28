import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function RegistrationForm_te() {
    const [experience,setExperience] = useState(false);
    console.log(experience);

    const[fName, setfName] = useState();
    const[lName, setlName] = useState();
    const[nameWithInitials,setNameWithInitials] = useState();
    const[NIC,setNIC] = useState();
    const[Gender, setGender] = useState();
    const[Email, setEmail] = useState();
    const[MNumber, setMNumber] = useState();
    const[MWNumber, setMWNumber] = useState();
    const[AddressLine01, setAddressLine01] = useState();
    const[AddressLine02, setAddressLine02] = useState();
    const[City, setCity] = useState();
    //const[FormerTeacher, setFormerTeacher] = useState("");

    const[IName, setIName] = useState("NULL");
    const[Duration, setDuration] = useState("NULL");
    const[Subjects, setSubjects] = useState("NULL");
    const[Medium, setMedium] = useState("NULL");
    const[ESubject, setESubject] = useState();
    const[EGrade, setEGrade] = useState();
    const[EMedium, setEMedium] = useState();
    const[EduDescription, setEduDescription] = useState();

    const navigate = useNavigate();

    const Validate =(e) =>{
        e.preventDefault();

        const formData ={
            fName, 
            lName, 
            nameWithInitials, 
            NIC, 
            Gender, 
            Email, 
            MNumber, 
            MWNumber, 
            AddressLine01, 
            AddressLine02, 
            City, 
            // FormerTeacher, 
            IName, 
            Duration, 
            Subjects, 
            Medium,
            ESubject,
            EGrade,
            EMedium, 
            EduDescription,
            status:"Pending"
        }

        console.log(formData);
        axios.post("http://localhost:8080/registrationTeacher/TeacherRegistration", formData).then(res =>{
            toast.success(res.data.status)
            navigate('/')
        }).catch(err =>{
            alert(err)
        })
    }

  return (
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>

        <h1>Teacher registration form</h1>

    <Form onSubmit = {Validate}>
        {/* personal details */}
        <h4 style={{fontWeight:'bold'}}>Personal details</h4>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" onChange={(e) =>{setfName(e.target.value)}} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name"onChange={(e) =>{setlName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name with initials</Form.Label>

            <Form.Control type="text" placeholder="Enter your name with initials" onChange={(e) =>{setNameWithInitials(e.target.value)}} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword"  onChange={(e) =>{setGender(e.target.value)}}>
            <Form.Control type="text" placeholder="Enter your NIC number" onChange={(e) =>{setNIC(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword"  onChange={(e) =>{setGender(e.target.value)}} required>
            <Form.Label>Gender</Form.Label>
            <br/>
            <Form.Check
            inline
            label="Male"
            name="group1"
            type="radio"
            value="Male"
            // id={`inline-${type}-1`}
          />
            <Form.Check
            inline
            label="Female"
            name="group1"
            type="radio"
            value="Female"
            // id={`inline-${type}-1`}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter your e-mail" onChange={(e) =>{setEmail(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text" placeholder="Enter your mobile number" onChange={(e) =>{setMNumber(e.target.value)}} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Whatsapp number</Form.Label>
            <Form.Control type="text" placeholder="Enter your whatsapp number" onChange={(e) =>{setMWNumber(e.target.value)}} required/>
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
            <Form.Control type="text" placeholder="Enter your City" onChange={(e) =>{setCity(e.target.value)}} required/>
        </Form.Group>

        {/* about the former teaching institutes */}
        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e) =>{setExperience(e.target.value)}} required>
            <Form.Label>Are you teach in a institute? </Form.Label>
            <br/>
            <Form.Check
            inline
            label="Yes"
            name="group1"
            type="radio"
            value = "True"
            // id={`inline-${type}-1`}
          />
            <Form.Check
            inline
            label="No"
            name="group1"
            type="radio"
            value = {false}
            // id={`inline-${type}-1`}
          />
        </Form.Group>
        {/* if yes in institute */}

        {experience === "True" ? (
            <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Institute Name</Form.Label>
            <Form.Control type="text" placeholder="Enter the name of the institute " onChange={(e) =>{setIName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" placeholder="Enter the duration of teaching " onChange={(e) =>{setDuration(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subjects</Form.Label>
            <Form.Control type="text" placeholder="Enter your subjects " onChange={(e) =>{setSubjects(e.target.value)}}/>
        </Form.Group>

        {/* <Form.Label>Medium </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex', color: 'red',}} onChange={(e) =>{setMedium(e.target.value)}} >
            <Form.Control type="text" placeholder="Enter your subjects " onChange={(e) =>{setSubjects(e.target.value)}} required/>
        </Form.Group> */}

        <Form.Label>Medium </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',}} onChange={(e) =>{setMedium(e.target.value)}} required>
        <br/>
            <Form.Check type="checkbox" label="Sinhala "/>
            <Form.Check type="checkbox" label="English "/>
            <Form.Check type="checkbox" label="Tamil "/>
        </Form.Group>
        
        </>
        ):<></>}

        {/* educational qualification */}
        <h4 style={{fontWeight:'bold'}}>Educational details</h4>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subjects you teach</Form.Label>
            <Form.Control type="text" placeholder="Enter your subjects " onChange={(e) =>{setESubject(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Grades</Form.Label>
            <Form.Control type="text" placeholder="Enter your grades" onChange={(e) =>{setEGrade(e.target.value)}} required/>
        </Form.Group>
        
        <Form.Label>Medium </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:'flex',}} onChange={(e) =>{setEMedium(e.target.value)}} required>
        <br/>
            <Form.Check type="checkbox" label="Sinhala "/>
            <Form.Check type="checkbox" label="English "/>
            <Form.Check type="checkbox" label="Tamil "/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Educational qualifications</Form.Label>
            <Form.Control as="textarea" style={{height:'10em'}} placeholder="Enter your education qualifications" onChange={(e) =>{setEduDescription(e.target.value)}} required/>   
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox" >
            <Form.Check type="checkbox" label="I agree to Terms and Conditions "/>
        </Form.Group> */}

        <Button variant="primary" type="submit" style={{width:'20%'}}>
            Submit
        </Button>
        <br></br>
        <br></br>
    </Form>
    <ToastContainer position="top-center" autoClose={500} hideProgressBar/>

    </Container>
  )
}

export default RegistrationForm_te