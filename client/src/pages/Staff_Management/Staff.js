import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserDetails } from '../../context/UserContext';



function Staff() {

  const navigate= useNavigate();
  const role = localStorage.getItem("Role");

  const {user,setUser} = UserDetails();

  useEffect(() => {
    if(role === "Admin"){
    }else{
        navigate("/Login")
    }
    }, [])

  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Nav>
            <Nav.Link href="/Staff/Edit">Manage Member</Nav.Link>
            <Nav.Link href="/Staff/Reports">Report</Nav.Link>
            <Nav.Link href="/Staff/TeacherHandle">Teacher Handling</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default Staff