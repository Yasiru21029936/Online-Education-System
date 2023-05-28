import React, { useEffect, useState } from 'react'
import {HashLoader} from 'react-spinners';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/esm/Table'
import Quiz from './Quiz'
import axois from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function QuizEdit() {

const [data,setData] = useState([]);

const [loading,setLoading] = useState(true);
const[question,setQuestion] = useState([]);
const location = useLocation();
const navigate = useNavigate();

const {
  ClassName,
  Grade,
  ClassType
} = location.state.props;
console.log(location.state.props);

  useEffect( () => {
    var Quizes = [];
    axios.post("http://localhost:8080/QuizMCQDB/getModuleQuiz", {Grade:Grade, ClassType:ClassType, ClassName:ClassName}).then((MCQ)=>{
      // console.log(MCQ.data.SendData);
      MCQ.data.SendData.map((e,i) =>{
        var tempArray = [];
        tempArray.push(e._id)
        tempArray.push(JSON.parse(e.QMCQID))
        Quizes.push(tempArray);
      })
      setQuestion(Quizes);
      question.map((e,i)=>{
      })
      setLoading(false)
    })
  }, [loading])


  const editQuiz = (elem) =>{

    // alert("ID :"+elem)
    navigate("/Quiz_Management/QuizEdit/manageQuiz",{state : {props:elem}})
  }
  
  return (
    <>
    <Quiz/>
    <center>
      
    <div style={{justifyContent:'center',display:'block', width:'50%',marginLeft:'10%'}}>
      <br/>
      <h2>Select Quiz to Update</h2>
      <br/>
      {loading ? <h3>Loading...</h3> :
       (
         question.map((elem,id)=>(
          <div key={id} style={{backgroundColor : 'lightblue',padding :10,borderRadius:5, marginBottom:5}} >
            <h5>
              Questions Name: <br/>
            </h5>
              <h4>
              {elem[1][0].Name}
              </h4>
              <Button onClick = {() =>editQuiz(elem)}> Edit Quiz </Button>
          </div>
        ))
        )}
       
    </div>
        </center>
         </>
  )
}


export default QuizEdit