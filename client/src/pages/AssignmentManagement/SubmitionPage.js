import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../../Styles/submitionPage.css';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
function SubmitionPage() {

  
  const location = useLocation();
  console.log(location)

  const [AssignmentDesc, setAssignmentDesc] = useState(location.state.props.AssignmentDesc);

  
  return (
    <div>
      <h2>Submition Link</h2>
      <br></br>
      <h3>{AssignmentDesc}</h3>

      <div className="asfilesub">

        <Form.Label>File submissions</Form.Label>
        <Form.Control type="file" />

      </div>

      <br></br>
      <br></br>



      <p>Accepted file types:
        <br></br>
        Document files -  .doc .docx .epub .gdoc .odt .oth .ott .pdf .rtf
        <br></br>
        Image files - .png .jpg .jpeg</p>
    </div>
  )
}

export default SubmitionPage