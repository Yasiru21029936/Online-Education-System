import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { UserDetails } from '../../context/UserContext';

function Payments() {
  const navigate = useNavigate();
  const {user,setUser} = UserDetails();


  useEffect(() => {
    const token = localStorage.getItem('user');

    if(!token){
      // toast.error("Invalid Credentials");
      navigate('/Login')
    }

    console.log(user)

  }, [])

  return (<>

  <Navbar bg="light" variant="light">
          <Container>
            <Nav>
              <Nav.Link href="/Payments/Classfees">Add Class fees</Nav.Link>
              {/* {(user.Role !== "Admin" || user.Role !== "SupportStaff" || user.Role !== "Staff") ? (<></>): */}
              {(user.Role === "student" || user.Role === "Teacher") ? (<></>):
              <>
              <Nav.Link href="/Payments/Utility">Utility Payments</Nav.Link>

              {(user.Role === "SupportStaff") ? (<></>):(
                <Nav.Link href="/Payments/Salary">Salary</Nav.Link>
                )}
              


              {(user.Role === "SupportStaff" || user.Role === "Staff") ? (<></>):(
                <Nav.Link href="/Payments/Analysis">Analysis</Nav.Link>
                )}

              </>}
              {/* <Nav.Link href="/Payments/OwnerS">Owner Shares</Nav.Link> */}
            </Nav>
          </Container>
          <ToastContainer position="top-center" autoClose={500} hideProgressBar/>
  </Navbar>

    {/* <div className='container'>
        <div>
            <Link to = "/Payments/Classfees"><button className='button'>Class fees</button></Link>
        </div>
        <div>
            <Link to = "/Payments/Utility"><button className='button'>Utility Payments</button></Link>
        </div>
        <div>
            <Link to = "/Payments/Salary"><button className='button'>Salary</button></Link>
        </div>
        <div>
            <Link to = "/Payments/OwnerS"><button className='button'>Owner Shares</button></Link>
        </div>
    </div> */}
  </>
  )
}

export default Payments