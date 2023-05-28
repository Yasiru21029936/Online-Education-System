import React, { useRef } from 'react'
//import './LoginForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios';
import { UserDetails } from '../../context/UserContext';

import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
function LoginForm() {

  const userName = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const {user,setUser} = UserDetails();

  const Validate = async(e) =>{

    e.preventDefault();

    const data = {
      username : userName.current.value,
      password : password.current.value,
    }

    axios.post("http://localhost:8080/authUser/login",data).then(res =>{
          localStorage.setItem('user',res.data.token);
          setUser(res.data.user)
          navigate('/')
      }).catch(err =>{
          toast.warn("UserName or Password incorrect")
  })

    

  }


  return (
    <Container style={{marginTop : 20,width : '800px' , border:'1px solid black', padding:'15px', borderRadius:'20px',marginBottom:20}}>
        <Form onSubmit={Validate}>
            <h2 style={{textAlign:'center', fontSize:'40px', fontWeight:'bold'}}>Login</h2>
            <hr style={{width:'100%'}}></hr>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name: </Form.Label>
                <Form.Control type="text" placeholder="Enter username" style={{width:'5in'}} ref={userName} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" placeholder="Enter your password" style={{width:'5in'}} ref={password} required/>
            </Form.Group>

            <Button type="submit" style={{backgroundColor:'blue', padding:'10px', borderRadius:'6px', width:'60%', textAlign:'center', marginLeft:'20%', marginBottom:'5px', border:'2px solid black'}} >
             Login
              </Button>       
            {/* <Button type="submit" style={{backgroundColor:'blue', padding:'10px', borderRadius:'6px', width:'60%', textAlign:'center', marginLeft:'20%', border:'2px solid black'}} ><a href='/ForgetPassword' style={{textDecoration:'none', color:'white'}}>Forget Password</a></Button>        */}
            <br/>
            <a href='/ForgetPassword' style={{textDecoration:'none', color:'black', justifyContent:'center', display:'flex'}}>Forget Password</a>
            <hr style={{background:'black', height:'2px', width:'auto'}}/>
            <div style={{ display:'flex', justifyContent:'center', borderRadius:'5px'}}>

              <Button style={{backgroundColor:'blue', padding:'10px', borderRadius:'6px', width:'60%', textAlign:'center', border:'2px solid black'}} ><a href='/RegisterStudent' style={{textDecoration:'none', color:'white'}}>Student Registration</a></Button>       
              <Button style={{backgroundColor:'blue', padding:'10px', borderRadius:'6px', width:'60%', textAlign:'center', marginLeft:'10%', border:'2px solid black'}} ><a href='/RegisterTeacher' style={{textDecoration:'none', color:'white'}}>Teacher Registration</a></Button>       
            </div>   
        <ToastContainer position="top-center" autoClose={500} hideProgressBar/>
        </Form>

    </Container>



  )
}

export default LoginForm