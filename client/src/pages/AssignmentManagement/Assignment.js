import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Assignment() {
  return (
    

<Navbar bg="light" variant="light">
<Container>
  <Nav>
    <Nav.Link href="/Assignment/AddAssignment">Add Assignment</Nav.Link>
    <Nav.Link href="/Assignment/ManageAssignment">Manage Assignment</Nav.Link>
    <Nav.Link href="/Assignment/AssignmentResult">Assignment Result</Nav.Link>
    <Nav.Link href="/Assignment/MarkSheet">MarkSheet</Nav.Link>
  </Nav>
</Container>
</Navbar>
  )
}

export default Assignment

//final edit 