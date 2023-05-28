import React from 'react'
//import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Classes() {
  return (
    //<div>Modules</div>

    <Navbar bg="light" variant="light">
        <Container>
          <Nav>
            <Nav.Link href="/Classes/AddClass">Add Class</Nav.Link>
            <Nav.Link href="/Classes/EditClass">Update Class</Nav.Link>
            {/* <Nav.Link href="/Classes/ModulePage">Module Page</Nav.Link> */}
            <Nav.Link href="/Classes/ClassesList">Classes</Nav.Link>
            {/* <Nav.Link href="/Classes/AddNotice">Notice</Nav.Link>
            <Nav.Link href="/Classes/AddNotes">Notes</Nav.Link> */}
            {/* <Nav.Link href="/Classes/AddRecordings">Recordings</Nav.Link> */}
          </Nav>
        </Container>
    </Navbar>

    // <div className='container'>
    //     <div>
    //         <Link to = "/Modules/AddModule"><button className= 'button'>Add Classes</button></Link>
    //     </div>
    //     <div>
    //         <Link to = "/Modules/AddNotes"><button className= 'button'>Notes</button></Link>
    //     </div>
    //     <div>
    //         <Link to = "/Modules/AddRecordings"><button className= 'button'>Recordings</button></Link>
    //     </div>
    //     <div>
    //         <Link to = "/Modules/ModuleDetails"><button className= 'button'>Class Details</button></Link>
    //     </div>
    // </div>
  )
}

export default Classes