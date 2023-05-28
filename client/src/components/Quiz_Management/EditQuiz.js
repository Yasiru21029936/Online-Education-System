import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../../Styles/Quiz-Management.css';

function EditQuiz(props) {
    // const params = useParams();
    // const values = JSON.parse(params.QuizData)
    const AllQuestion = []
    const [Question,setQuestion] = useState()
    const [Answer1,setAnswer1] = useState()
    const [Answer2,setAnswer2] = useState()
    const [Answer3,setAnswer3] = useState()
    const [Answer4,setAnswer4] = useState()

    const location = useLocation();
    console.log(location.state.props);
  
    const NextQuiz = () => {
        const Questions = {Question:Question,Answer1:Answer1,Answer2:Answer2,Answer3:Answer3,Answer4:Answer4}
    }

  return (
    <>
    <Container style={{marginTop : '3%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <p>Enter Question</p>
                <Form.Control type="text" placeholder="Enter Question " value={Question} onChange={(e)=>{setQuestion(e.target.value)}} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <p>Enter Answer 1 :</p>
                <Form.Control type="text" placeholder="Answer 1" value={Answer1} onChange={(e)=>{setAnswer1(e.target.value)}} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <p>Enter Answer 2 :</p>
                <Form.Control type="text" placeholder="Answer 2" value={Answer2} onChange={(e)=>{setAnswer2(e.target.value)}} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <p>Enter Answer 3 :</p>
                <Form.Control type="text" placeholder="Answer 3" value={Answer3} onChange={(e)=>{setAnswer3(e.target.value)}} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <p>Enter Answer 4 :</p>
                <Form.Control type="text" placeholder="Answer 4" value={Answer4} onChange={(e)=>{setAnswer4(e.target.value)}} required/>
            </Form.Group>
            <Button onClick={NextQuiz}>
                Go Next
            </Button>
        </Form>
    </Container>
    </>
  )
}

export default EditQuiz