import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'

function Forgetpw_reset() {
  return (
    <Container style={{marginTop : '5%',width : '500px' , border:'1px solid black', padding:'15px', height:'500px'}}>
        <Form>
            <h1>Reset passsword</h1>
            <hr style={{width:'100%'}}></hr>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control type="text" placeholder="Enter OTP code" style={{width:'450px'}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your new password" style={{width:'450px'}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirm New passsword</Form.Label>
                <Form.Control type="password" placeholder="Re-enter your new password" style={{width:'450px'}}/>
            </Form.Group>

            <Button variant="primary" type="submit" style={{width:'50%', display:'flex', justifyContent:'center', marginLeft:'25%'}}>
                <a href='/Login' style={{textDecoration:'none', color:'white'}}>Reset</a>
            </Button>

            {/* <Button variant="primary" type="submit" style={{width:'20%'}}>
                <a href='/Login' style={{textDecoration:'none', color:'white'}}>Reset password</a>
            </Button> */}
        </Form>
    </Container>
  )
}

export default Forgetpw_reset