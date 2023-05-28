import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
//import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Userprofile() {
 
  return (

    <Navbar bg="light" variant="light">
<Container>
  <Nav>
    <Nav.Link href="/StProfile">User profile</Nav.Link>
    <Nav.Link href="/ChangePassword">Change password</Nav.Link>
  </Nav>
</Container>
</Navbar>
  )
}

export default Userprofile

 