import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import Userprofile from './Userprofile';

function ChangePw() {
  return (
    <>
    <Userprofile/>
    <Container style={{marginTop : '5%',width : '500px' , border:'1px solid black', padding:'15px', height:'500px'}}>
        <Form>
            <h1>Change passsword</h1>
            <hr style={{width:'100%'}}></hr>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Currect Password</Form.Label>
                <Form.Control type="text" placeholder="Enter current password" style={{width:'450px'}}/>
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
                <a href='/Login' style={{textDecoration:'none', color:'white'}}>Change</a>
            </Button>

            {/* <Button variant="primary" type="submit" style={{width:'20%'}}>
                <a href='/Login' style={{textDecoration:'none', color:'white'}}>Reset password</a>
            </Button> */}
        </Form>
    </Container>
    </>
  )
}

export default ChangePw