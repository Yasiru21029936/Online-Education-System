import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/esm/Table';
import axios from 'axios';

function ManageQuiz() {
  const location = useLocation();
  const [quizName,setQuizName] = useState();
  const [quiz,setQuiz] = useState([]);
  const [elements,setElements]= useState();
  const navigate = useNavigate();
  const [Answer1,setAnswer1] = useState();
  const [Answer2,setAnswer2] = useState();
  const [Answer3,setAnswer3] = useState();
  const [Answer4,setAnswer4] = useState();
  const [CAnswer,setCAnswer] = useState();

  useEffect(() => {
    const elem = location.state.props;
    setElements(elem);
    console.log(elem[1][0].Name);
    setQuizName(elem[1][0].Name)
    setQuiz(elem[1][1])

  }, [])
  
  const updateQName = (e) =>{
    e.preventDefault();
    elements[1][0].Name = quizName;
    const finalData = JSON.stringify(elements[1]);
    const id = elements[0];

    const data = {
      QMCQID :finalData,
      id :id
    }

    axios.put("http://localhost:8080/QuizMCQDB/update",data).then(()=>{
      alert("Updated")
      navigate(-1)
    }).catch(err =>{
      alert(err)
    })

  }

  const deleteQuiz=()=>{
    axios.delete(`http://localhost:8080/QuizMCQDB/delete/${elements[0]}`).then(()=>{
      alert("Deleted !")
      navigate(-1)
    }).catch(err =>{
      alert(err)
    })
  }

  return (
    <Container  style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>

      <Form onSubmit={(e) => {updateQName(e)}}>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Quiz Name</Form.Label>
        <Form.Control type ="text" value = {quizName} placeholder="" onChange={(e) =>{setQuizName(e.target.value)}} required/>
        <Form.Text className="text-muted" >
          *You can only update the Quiz Name
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Quiz Name
      </Button>
      <Button variant="danger" style={{marginLeft:10}} onClick = {deleteQuiz}>
        Delete Quiz
      </Button>
    </Form>

    <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>

        <thead>
            <tr>
            <th>No</th>
            <th>Question</th>
            <th>Answer 1</th>
            <th>Answer 2</th>
            <th>Answer 3</th>
            <th>Answer 4</th>
            </tr>
        </thead>

        <tbody>
            {quiz.map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e?.Question}</td>
                    <td>{e?.Answer1}</td>
                    <td>{e?.Answer2}</td>
                    <td>{e?.Answer3}</td>
                    <td>{e?.Answer4}</td>
                    {/* <td>{e[1]?.Question}</td>
                    <td>{e[1]?.Answer1}</td>
                    <td>{e[1]?.Answer2}</td>
                    <td>{e[1]?.Answer3}</td>
                    <td>{e[1]?.Answer4}</td> */}
                    
                </tr>
                
            ))}
    
        </tbody>
        </Table>
        
    </Container>
  )
}

export default ManageQuiz