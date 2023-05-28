import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'

function Forgetpw() {
  return (
    <Container style={{marginTop : '10%',width : '500px' , border:'1px solid black', padding:'15px', height:'300px'}}>
      <Form>
      <h2 style={{fontWeight:'bold'}}>Forget password</h2>
      <hr></hr>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" style={{width:'450px'}} />
      </Form.Group>
      <Button variant="primary" type="submit" style={{width:'50%', display:'flex', justifyContent:'center', marginLeft:'25%'}}>
            <a href='/ForgetResetPassword' style={{textDecoration:'none', color:'white'}}>Submit</a>
      </Button>
        
      </Form>

    </Container>
  )
}

export default Forgetpw