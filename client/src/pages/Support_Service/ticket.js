import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
/*import SupportDesk from './Support_Service/SupportDesk/Ticket';*/

function Ticket() {
  return (
    <Container style={{marginTop : '3%', marginBottom:'50%',display : 'block',width : '100%',justifyContent : 'center'}}>
     <p><h1>Sahethra Student Support</h1></p> 
     <p><h2>Please complete this form and one of our agents will reply to you by email as soon as possible</h2></p>

    <Form>
      <Form.Group className="mb-3" controlId="BasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="RegistrationNumber">
        <Form.Label>Registration Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Registration Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="School">
        <Form.Label>School</Form.Label>
        <Form.Control type="text" placeholder="Enter School" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="NIC">
        <Form.Label>NIC</Form.Label>
        <Form.Control type="number" placeholder="Enter NIC" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ContactNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Contact Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Request/inquiryType">
        <Form.Label>Request/inquiry Type</Form.Label>
        <Form.Control type="text" placeholder="Please select the most suitable option" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Module Name</Form.Label>
          <Form.Select required>
            <option>Select module name</option>
            <option value="1">Chemistry</option>
            <option value="2">Physics</option>
            <option value="3">Combined Maths</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Module Code</Form.Label>
          <Form.Select required>
            <option>Select Module Code</option>
            <option value="1">1100</option>
            <option value="2">1102</option>
            <option value="3">1103</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Message">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Leave a message" />
      </Form.Group>

      <Form.Group className= "mb-3" controlId= "formFile">
          <Form.Label>Choose Files</Form.Label>
          <Form.Control type= "file"/>
      </Form.Group>

      <Button variant="primary" type="reset">
        Reset
      </Button>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    </Container>
  );
}

export default Ticket;