import React, { useEffect, useState } from 'react'
// import { questions } from "./Questions";
import '../../Styles/Quiz-Management.css'
import axois from 'axios'
import Quiz from './Quiz';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/esm/Table';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';


function QuizDisplaySub() {

  const[subName,setSubName] = useState();

  var name
  useEffect(() => {

    axios.get("http://localhost:8080/QuizSubDB/").then((res)  => {

    var Quizes = [];
    res.data.SendData.map((e,i) => {
      var tempArray = [];
      tempArray.push(e._id)
      tempArray.push(JSON.parse(e.QSubID))
      Quizes.push(tempArray)
    })
        console.log(Quizes[1][1].SubName);
        setSubName(Quizes[1][1].SubName)
    })
    
  }, [])
  
return (

  <>
    <Quiz/>
    <center>
    <br/>
    <h1>{subName}</h1>
    <br/>
    
        <li>This quiz have 40 MCQ quections.</li>
        <li>Answer All The Quections.</li>
        <li>Covers upto 7th lesson.</li>
        <li>Back Navigation is allowed.</li>
        <li>With in 2 hours quiz will closed.</li>  
    
    <br/>
    <a href='/Quiz_Management/QuizDisplay'>
    <Button>
        Start Quiz
    </Button>
    </a>
    </center>
  </>
  )
}

export default QuizDisplaySub
