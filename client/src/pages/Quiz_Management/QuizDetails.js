import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Quiz from './Quiz'
import '../../Styles/Quiz-Management.css'

function QuizDetails() {

  const location = useLocation();
  // const tempid = "635433d98707563bcca7fec8";
  const [tempid,settempid] = useState(location.state.props.id);
  const [loading,setLoading] = useState(true);
  const [name,setName] = useState();
  const [STime,setSTime] = useState();
  const [ETime,setETime] = useState();
  const [Date,setDate] = useState();
  const [NoOfQuiz,setNoOfQuiz] = useState();
  const [questions,setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      axios.get(`http://localhost:8080/QuizMCQDB/getQuestion/${tempid}`).then((MCQ) =>{
        console.log(MCQ.data.quiz.QMCQID);
        const questionsObject = JSON.parse(MCQ.data.quiz.QMCQID)
        setName(questionsObject[0].Name);
        //console.log(questionsObject[1]);
        setQuestions(questionsObject[1]);
        setSTime(questionsObject[0].STime);
        setETime(questionsObject[0].ETime);
        setDate(questionsObject[0].Date);
        setNoOfQuiz(questionsObject[0].NoOfQuiz);
        
        setLoading(false)
      }).catch(err =>{
        alert(err)
      })

    }, [])

    const Toquiz = () =>{
      navigate('/Quiz_Management/QuizDisplay',{state : {props:questions,QID:tempid}})
    }


  return (
    <>
    <Quiz/>
    <center>
    <h1>{name}</h1>
    <h4>Exam Date : {Date}</h4>
    <h4>Time Duration : [ {STime} ] to [ {ETime} ]</h4>
    </center>
    <div class="qcard">

    <ul style={{marginLeft:'40%'}}>
      
        <li>This quiz have {NoOfQuiz} MCQ quections.</li>
        <li>Answer All The Quections.</li>
          
    </ul>
    </div>
    <center>
    <Button onClick={Toquiz} style={{marginTop:10 , marginBottom:30}}>
        Start Quiz
    </Button>
    </center>
    </>
  )
}

export default QuizDetails