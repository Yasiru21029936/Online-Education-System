import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom' 

function SupportDesk() {
  return (
    <Container style={{marginTop : '3%', marginBottom:'50%',display : 'block',width : '100%',justifyContent : 'center'}}>
    <div className = 'container'>
    <div>
            <Link to = "/Support_Service/SupportDesk/Ticket"><button className='button'>Ticket</button></Link>
        </div>
    </div>   
    </Container> 
  ) 
}

export default SupportDesk