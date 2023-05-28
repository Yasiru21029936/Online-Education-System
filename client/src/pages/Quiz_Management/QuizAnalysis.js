import React, { useEffect,useState } from 'react'
import Quiz from './Quiz'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';


function QuizAnalysis() {

  const [Data,setData] = useState();
  const [Highest,setHighest] = useState();
  const [min,setMin] = useState();

  useEffect(() => {

    axios.get(`http://localhost:8080/QuizMCQResultDB/`).then((result) => {
      setData(result.data.SendData);
    }).catch(err => {
      alert(err)
    })
  })

  console.log();

  const setaFunction = (value) => {
    if (value === 'High') {
      console.log("Loow")

      alert("High")
      axios.get(`http://localhost:8080/QuizMCQResultDB/getmax`).then((result) => {
      setHighest(result.data.Quiz);
      console.log(Highest)
      alert(Highest[0].Username)
      alert(Highest[0].Marks)

    }).catch(err => {
      alert(err)
    })
    }
    else if (value === 'Low') {
      axios.get(`http://localhost:8080/QuizMCQResultDB/getmin`).then((result) => {
      setMin(result.data.Quiz);

      console.log(min);
      alert(min.Username)
      alert(min.Marks)
      
    }).catch(err => {
      alert(err)
    })
    } 
    else if (value === 'Avg') {
    }
    else if (value === 'Over') {
      console.log("Loow")
      alert("Overall")
    } 
    else 
    {
      alert("High else")
    }
  }
  
 
  return (
    <>
    <Quiz/>
      <center>
      <h1>Analyze Results</h1>
      <br/>
        <Navbar bg="light" variant="light">
        <Container>
          <Nav>
            <Nav.Link href="">
                <Button value='High' onClick={(e) => {setaFunction(e.target.value)}}>
                  Highest Marks
                </Button>
                {Highest}
            </Nav.Link>
            <Nav.Link href="">
                <Button value='Low' onClick={(e) => {setaFunction(e.target.value)}}>
                  Lowest Marks
                </Button>
            </Nav.Link>
            <Nav.Link href="">
                <Button value='Avg' onClick={(e) => {setaFunction(e.target.value)}}>
                  Average Marks
                </Button>
            </Nav.Link>
            <Nav.Link href=""> 
                <Button value='Over' onClick={(e) => {setaFunction(e.target.value)}}>
                   Overall Marks
                </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
    </Container>
    </center>
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
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </>
  )
}

export default QuizAnalysis