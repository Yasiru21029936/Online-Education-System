import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
// import '../../Styles/Quiz-Management.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
import axios from 'axios';
import CloseButton from 'react-bootstrap/esm/CloseButton';


//MCQ Upload
function QuizUpload() {
  const [isMcq,setIsMcq] = useState(true)
  const [Class,setClass] = useState();
  const [Subject,setSubject] = useState();
  const [TID,setTID] = useState();
  const [Name,setName] = useState();
  const [NoOfQuiz,setNoOfQuiz] = useState();
  const [Date,setDate] = useState();
  const [STime,setSTime] = useState();
  const [ETime,setETime] = useState();
  const [BackNav,setBackNav] = useState();
  const [SubName,setSubName] = useState();
  const [SubGrade,setSubGrade] = useState();
  const [SubModule,setSubModule] = useState();
  const [SubTID,setSubTID] = useState();
  const [SubDocument,setSubDocument] = useState();
  const [SubDate,setSubDate] = useState();
  const [SubSTime,setSubSTime] = useState();
  const [SubETime,setSubETime] = useState();
  const [SubLink,setSubLink] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  
  const {
    ClassName,
    Grade,
    ClassType
  } = location.state.props;


  useEffect(() => {

    setClass(location.state.props.Grade);
    setTID(location.state.props.ClassType);
    setSubject(location.state.props.ClassName);

  })
 
  
  const CreateQuiz = () => {
    const QuizArray = {
      Name,
      Class,
      TID,
      Subject,
      NoOfQuiz,
      Date,
      STime,
      ETime,
      BackNav};
    navigate('/Quiz_Management/QuizUpload/InsertQuiz',{state : {props:QuizArray}})
  }
  
  //Submission Quiz
  const SubArray = {
    SubName,
    SubDocument,
    SubDate,
    SubSTime,
    SubETime,
    SubLink
  }
  const SubmitSub = () => {

    const finalSub = JSON.stringify(SubArray);
    const SubData ={
      finalSub,
      SubGrade,
      SubModule,
      SubTID
    }

  useEffect(() => {})

    axios.post("http://localhost:8080/api/Admin/InsertSub",SubData).then(res =>{
      alert("New Submission Added")
      navigate("/Quiz_Management/QuizSubEdit")
    }).catch(err => {
      alert(err)
    })
    
  }

  return (
      <>
      <Quiz/>
      <Container style={{marginTop : '3%', marginBottom:'50%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <Form onSubmit={CreateQuiz}>


        <Form.Group className="mb-3" >
              <p>Enter Grade:</p>
              <Form.Select value ={Class} onChange={(e)=>{setClass(e.target.value)}} readonly required >
                <option >Select Class</option>
                <option value ='Grade 1'>Grade 1</option>
                <option value ='Grade 2'>Grade 2</option>
                <option value ='Grade 3'>Grade 3</option>
                <option value ='Grade 4'>Grade 4</option>
                <option value ='Grade 5'>Grade 5</option>
                <option value ='Grade 6'>Grade 6</option>
                <option value ='Grade 7'>Grade 7</option>
                <option value ='Grade 8'>Grade 8</option>
                <option value ='Grade 9'>Grade 9</option>
                <option value ='Grade 10'>Grade 10</option>
                <option value ='Grade 11'>Grade 11</option>
                <option value ='Grade 12'>Grade 12</option>
                <option value ='Grade 13'>Grade 13</option>
                <option value ='Other'>Other</option>
              </Form.Select>
            </Form.Group>

        <p>Enter Class Name:</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Select placeholder="Enter Subject " readonly value= {Subject} onChange={(e)=>{setSubject(e.target.value)}} required >
        <option>Select Class Name</option>
                <option value = 'Combined Maths 2022'>Combined Maths 2022</option>
                <option value = 'Combined Maths 2023'>Combined Maths 2023</option>
                <option value = 'Combined Maths 2024'>Combined Maths 2024</option>
                <option value = 'Physics 2022'>Physics 2022</option>
                <option value = 'Physics 2023'>Physics 2023</option>
                <option value = 'Physics 2024'>Physics 2024</option>
                <option value='Chemistry 2022'>Chemistry 2022</option>
                <option value='Chemistry 2023'>Chemistry 2023</option>
                <option value='Chemistry 2024'>Chemistry 2024</option>
                <option value='Biology 2022'>Biology 2022</option>
                <option value='Biology 2023'>Biology 2023</option>
                <option value='Biology 2024'>Biology 2024</option>
                <option value='Mathematics'>Mathematics</option>
                <option value='Science'>Science</option>
                <option value='Commerce'>Commerce</option>
                <option value='English'>English</option>
                <option value='ICT'>ICT</option>
                <option value='Other'>Other</option>
                </Form.Select>
        </Form.Group>

        <p>Class Type:</p>
        <Form.Group className="mb-3" >
          <Form.Select value={TID} onChange = {(e) => {setTID(e.target.value)}} required >
                <option>Select Class Type</option>
                <option value = 'A/L reguler'>A/L reguler</option>
                <option value = 'A/L revision'>A/L revision</option>
                <option value='OL'>OL</option>
                <option value='Paper'>Paper</option>
                <option value='Other'>Other</option>
          </Form.Select>
      </Form.Group>
       
        <p>Enter Name For MCQ :</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Name " value= {Name} onChange={(e)=>{setName(e.target.value)}}required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <p>Enter No Of MCQs :</p>
        <Form.Control type="number" placeholder="Enter No Of MCQs" value={NoOfQuiz} onChange={(e)=>{setNoOfQuiz(e.target.value)}} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <p>Exam Date :</p>
        <Form.Control type="date" placeholder="Date" value={Date} onChange={(e)=>{setDate(e.target.value)}} required />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <p>Enter Start Time :</p>
        <Form.Control type="time" placeholder="Enter Time In Minutes" value={STime} onChange={(e)=>{setSTime(e.target.value)}} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <p>Enter End Time :</p>
        <Form.Control type="time" placeholder="Enter Time In Minutes" value={ETime} onChange={(e)=>{setETime(e.target.value)}} required />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Turn On Back Navigation" value={BackNav} onChange={(e)=>{setBackNav(e.target.value)}}/>
        </Form.Group>

       
          <Button variant="primary" type="submit">
           Submit
          </Button>

      </Form>
        
        
    </Container>
    </>
  )
}

export default QuizUpload