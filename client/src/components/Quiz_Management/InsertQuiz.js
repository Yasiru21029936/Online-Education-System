import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../../Styles/Quiz-Management.css';
import axios from 'axios';
import Table from 'react-bootstrap/esm/Table';

function InsertQuiz(props) {
    // const params = useParams();
    // const values = JSON.parse(params.QuizData)
    const [Question,setQuestion] = useState();
    const [Answer1,setAnswer1] = useState();
    const [Answer2,setAnswer2] = useState();
    const [Answer3,setAnswer3] = useState();
    const [Answer4,setAnswer4] = useState();
    const [CAnswer,setCAnswer] = useState();
    const [QuestionCount,setQuestionCount] = useState(1);

    const location = useLocation();
    // console.log(location.state.props);
     
    const {
        Name,
        Class,
        TID,
        NoOfQuiz,
        Subject,
        Date,
        STime,
        ETime,
        BackNav} = location.state.props;

    const Quiz = []

    const QuestionHeader = {
        Name,
        QuestionType:"MCQ",
        Subject,
        NoOfQuiz,
        Date,
        STime,
        ETime,
        BackNav
    }

    Quiz.push(QuestionHeader);

    const [qandA,setQandA] = useState([]);
    const navigate = useNavigate();
    

    const NextQuiz = () => {
        const QandA = {
            Question,
            Answer1,
            Answer2,
            Answer3,
            Answer4,
            CAnswer}

            // QuestionAndAnswers.push(QandA)
            qandA.push(QandA)

            // Clearing Form
            setQuestion("");
            setAnswer1("");
            setAnswer2("");
            setAnswer3("");
            setAnswer4("");
            setCAnswer("");

            //Count Increment
            setQuestionCount(QuestionCount+1);
    }
    const SubmitQuiz = (e) => {
        e.preventDefault();
        Quiz.push(qandA);
        console.table(Quiz)
        const finalQuiz = JSON.stringify(Quiz);
        const data ={
            finalQuiz,
            Class,
            TID,
            Subject
        }

        console.log(finalQuiz)

        axios.post("http://localhost:8080/QuizMCQDB/InsertMCQ",data).then(res =>{
            alert("New MCQ Added")
            navigate(-2)
        }).catch(err=>{
            alert(err)
        })


    }
    
  return (
    <>
    <Container style={{marginTop : '3%',display : 'block',width : '100%',justifyContent : 'center'}}>
            <h4>
                Question No : {QuestionCount}
            </h4>
            <Form onSubmit={(e) => SubmitQuiz(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p>Enter Question</p>
                    <Form.Control type="text" placeholder="Enter Question " value={Question} onChange={(e)=>{setQuestion(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p>Enter Answer 1 :</p>
                    <Form.Control type="text" placeholder="Answer 1" value={Answer1} onChange={(e)=>{setAnswer1(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p>Enter Answer 2 :</p>
                    <Form.Control type="text" placeholder="Answer 2" value={Answer2} onChange={(e)=>{setAnswer2(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p>Enter Answer 3 :</p>
                    <Form.Control type="text" placeholder="Answer 3" value={Answer3} onChange={(e)=>{setAnswer3(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p>Enter Answer 4 :</p>
                    <Form.Control type="text" placeholder="Answer 4" value={Answer4} onChange={(e)=>{setAnswer4(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p>Correct Answer :</p>
                    <Form.Select onChange={(e) =>{setCAnswer(e.target.value)}} required>
                    <option>Select Correct Answer </option>
                    <option value = 'Answer 1'>Answer 1</option>
                    <option value = 'Answer 2'>Answer 2</option>
                    <option value = 'Answer 3'>Answer 3</option>
                    <option value = 'Answer 4'>Answer 4</option>
              </Form.Select>
                </Form.Group>
                <Button onClick={NextQuiz}>
                    Save
                </Button>
                <br></br>
        <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Question No</th>
            <th>Question</th>
            <th>Answer 1</th>
            <th>Answer 2</th>
            <th>Answer 3</th>
            <th>Answer 4</th>
            <th>Correct Answer</th>
            </tr>
        </thead>
        <tbody>
            {qandA.map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.Question}</td>
                    <td>{e.Answer1}</td>
                    <td>{e.Answer2}</td>
                    <td>{e.Answer3}</td>
                    <td>{e.Answer4}</td> 
                    <td>{e.CAnswer}</td> 
                </tr>
            ))}
    
        </tbody>
        </Table>
                <br></br>
                <Button type='submit'>
                    Submit
                </Button>
            </Form>
          <br/>  
          <br/>  
          <br/>  
    </Container>
    </>
  )
}

export default InsertQuiz