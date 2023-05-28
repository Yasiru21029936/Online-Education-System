import React, { useEffect, useState } from 'react'
// import { questions } from "./questions";
import Button from 'react-bootstrap/esm/Button'
import Clock from 'react-live-clock';
import '../../Styles/Quiz-Management.css'
import Quiz from './Quiz';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti'
import axios from 'axios';
import { UserDetails } from '../../context/UserContext';

function QuizDisplay() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading,setLoading] = useState(true);
  const {user,setUser}= UserDetails();
  const [ques,setQues] = useState([]);
  const [QID,setQID] = useState([]);
  const [questions,setQuestion] = useState([]);
  const [viewResults,setViewResults] = useState (false);
  const navigate = useNavigate()
  
  const location = useLocation();
  
  useEffect(() => {

    const token = localStorage.getItem('user');

    if(!token){
      // toast.error("Invalid Credentials");
      navigate('/Login')
    }

    // console.log(location.state.props)
    setQues(location.state.props)
    setQID(location.state.QID)
    // console.log(QID);
    let question = [];

    ques.map((e,i) =>{

      const tempObject = {
        questionText : e.Question,
        answerOptions : [
          { answerText: e.Answer1, isCorrect: (e.CAnswer === "Answer 1") },
          { answerText: e.Answer2, isCorrect: (e.CAnswer === "Answer 2") },
          { answerText: e.Answer3, isCorrect: (e.CAnswer === "Answer 3") },
          { answerText: e.Answer4, isCorrect: (e.CAnswer === "Answer 4") },
        ]
      }
      question.push(tempObject)
      setLoading(false)
      // console.log(tempObject)
    })
    setQuestion (question)
    
  }, [location.state.props, ques])

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < (questions ? questions.length : [].length)) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const showResults = () =>{

    const data = {
      Username:user.userName,
      Marks:score,
      QID:QID
    }
    
    axios.post(`http://localhost:8080/QuizMCQResultDB/InsertMark`,data).then(res => {
      
    }).catch(err => {
      alert(err)
    })
    setViewResults(true)
  }

  return (
    <>
    <Quiz/>
    
    
    <h1 style={{marginLeft:'100px'}}>Time  :-  
      <Clock style={{marginLeft:'10px'}} format={'HH:mm:ss'} ticking={true} timezone={'Asia/Calcutta'} />
      </h1>


{loading ? (<>Loading questions ... </>) : (

  <div className="app" margin-top="10px">
      
      {showScore ? (
        <section align="center">
          {viewResults ? (
            <>
            <Confetti
            style={{marginLeft:-200}}
              width={800}
              height={400}
              numberOfPieces = {200}
              gravity = {0.08}
              initialVelocityX = {1}
            />
            <h1 style={{marginTop:50}}>
            Your score is {score} out of {questions.length}
            </h1>
            <Button onClick={() => {navigate(-2)}}>Back</Button>
            </>
            ):<>
            <Button onClick={showResults}>Finish</Button>
            
            </>}
        </section>
      ) : (
        <>
        <br/>
          <section align="center">
            <h2>
      
              Question {currentQuestion + 1} / {questions.length}
              
            </h2>
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <div class="space" style={{margint:100}}>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <Button class="buttondis" onClick={() => handleClick(item.isCorrect)}>
                {item.answerText}
              </Button>
            ))}

          </section>

          </div>
        </>
      )}
    
    </div>
    )}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        </>
  )
}

export default QuizDisplay

// [{"Name":"English For Grade 3 - Filling The Blanks","QuestionType":"MCQ","Subject":"English","NoOfQuiz":"4","Date":"2022-11-07","STime":"15:30","ETime":"16:59"},
// [{"Question":"Ap_le","Answer1":"s","Answer2":"p","Answer3":"l","Answer4":"t","CAnswer":"Answer 2"},
// {"Question":"Sch_ol","Answer1":"o","Answer2":"k","Answer3":"j","Answer4":"h","CAnswer":"Answer 1"}]
// ]
