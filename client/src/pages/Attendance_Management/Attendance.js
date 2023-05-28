import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Attendence() {
  return (<>

<Navbar bg="light" variant="light">
        <Container>
          <Nav>
            <Nav.Link href="/Attendance_Management/Attendanceform">Attenndanceform</Nav.Link>
          
          </Nav>
        </Container>
</Navbar>


    
  </>
  )
}

export default Attendence