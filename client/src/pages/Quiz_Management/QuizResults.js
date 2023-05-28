import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/esm/Table'
import Quiz from './Quiz'
import generatePDF from '../../components/Quiz_Management/ReportGenerator'
import { useLocation, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function QuizResults() {

  //635433d98707563bcca7fec8
  //636608ba074bba7ed62cccb5
  const location = useLocation();
  // const tempid = "635433d98707563bcca7fec8";
  const [tempid,settempid] = useState(location.state.props.id);
  //const tempid = "635433d98707563bcca7fec8";
  const [Data,setData] = useState([]);
  const [Name,setName] = useState();
  const [HighestName,setHighestName] = useState();
  const [LowestName,setLowestName] = useState();
  const [NoOfQuiz,setNoOfQuiz] = useState();
  const [STime,setSTime] = useState();
  const [ETime,setETime] = useState();
  const [Date,setDate] = useState();
  const [Max,setMax] = useState(0);
  const [Min,setMin] = useState(1000);
  const columnsPDF = [{ Username:'Username',Marks:'Marks' }]
  const navigate = useNavigate();
  const [search,setSearch] = useState("");
  const [ShowHigh,setShowHigh] = useState(false);
  const [ShowLow,setShowLow] = useState(false);
  const [ShowAvg,setShowAvg] = useState(false);
  const [Avg,setAvg] = useState();
  const [tot,setTot] = useState();
 
  useEffect(() => {
    axios.get(`http://localhost:8080/QuizMCQDB/getQuestion/${tempid}`).then((MCQ) =>{
        const questionsObject = JSON.parse(MCQ.data.quiz.QMCQID)
        setName(questionsObject[0].Name);
        setNoOfQuiz(questionsObject[0].NoOfQuiz);
        setSTime(questionsObject[0].STime);
        setETime(questionsObject[0].ETime);
        setDate(questionsObject[0].Date);
    })
    axios.get(`http://localhost:8080/QuizMCQResultDB/getResult/${tempid}`).then((result) => {
      // console.log(result.data.SendData);
      setData(result.data.SendData);
    }).catch(err => {
      alert(err + "Error" )
    })
    axios.get(`http://localhost:8080/QuizMCQResultDB/getmax/${tempid}`).then((result) => {
      //console.log(result.data.Max.Marks);
      // setMax(result.data.Max.Marks);
    }).catch(err => {
      alert(err + "Error" )
    })

    
  },[])
  useEffect(() => {
      Data.map((e)=>{
        // alert(e.Marks + "Max is "+Max)
        if(e.Marks>Max){
          setMax(e.Marks)
          setHighestName(e.Username)
        }      })

  }, [Data])
  useEffect(() => {
    Data.map((e)=>{
      // alert(e.Marks + "Max is "+Max)
      if(e.Marks<Min){
        setMin(e.Marks)
        setLowestName(e.Username)
      }
    })

}, [Data])
  useEffect(() => {
    var avg = 0;
    var count = 0;
    var tot = 0;
    Data.map((e)=>{
      // alert(e.Marks + "Max is "+Max)
      if(e.Marks>=0){
        tot = tot + e.Marks
        count = count +1 
        avg = tot / count
        setAvg(avg);
        setTot(count)
      }
    })

}, [Data])

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Highest Marks 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Name : {HighestName}</h4>
          <h4>Score : {Max}</h4>
          <h4>Percentage : {Max / NoOfQuiz * 100}%</h4>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function MyVerticallyCenteredModalLow(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Lowest Marks 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Name : {LowestName}</h4>
          <h4>Score : {Min}</h4>
          <h4>Percentage : {Min / NoOfQuiz * 100}%</h4>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function MyVerticallyCenteredModalAvg(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Average Mark
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Total Students : {tot}</h4>
          <h4>Average Score : {Avg}</h4>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
    <Quiz/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
    <br/>
    <center>
    <h1>{Name}</h1>
    <h4>Exam Date : {Date}</h4>
    <h4>Time Duration : [ {STime} ] to [ {ETime} ]</h4>
    <h4>Marks Are Out Of : {NoOfQuiz}</h4>
    </center>

    
    <div>
      <h4>Analysis Data</h4>
    <Button onClick={() => setShowHigh(true)} style={{fontWeight : 'bold'}}>Highest Mark</Button>
    <Button  onClick={() => setShowLow(true)} style={{fontWeight : 'bold', marginLeft:'16px'}}>Lowest Mark</Button>
    <Button onClick={() => setShowAvg(true)} style={{fontWeight : 'bold', marginLeft:'16px'}}>Average Mark</Button>
      <br></br>
    <h4 style={{marginTop:'14px'}}>Download Report</h4>
        <Button onClick={() => generatePDF(
          Data.map(m => ({
            Username: m.Username,
            Marks: m.Marks
   		 }
    )), columnsPDF, false, Name)} 

      type='submit'style={{fontWeight : 'bold'}}>
            Download
        </Button>
      </div>
      <MyVerticallyCenteredModal
        show={ShowHigh}
        onHide={() => setShowHigh(false)}
      />
      <MyVerticallyCenteredModalLow
        show={ShowLow}
        onHide={() => setShowLow(false)}
      />
      <MyVerticallyCenteredModalAvg
        show={ShowAvg}
        onHide={() => setShowAvg(false)}
      />
      <div>

            <Form className="d-flex" style={{width : '60%', marginTop : '30px' }}>
        
                    <Form.Control
                      type="search"
                      value = {search}
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      onChange={(e) =>{setSearch(e.target.value)}}
                      />
                    <Button >Search</Button>
                  </Form>
                      </div>
    <div style={{flex : 1,display : 'flex',justifyContent : 'center'}}>   
      <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
      
      <tr>
            <td>No</td>
            <td>User Name</td>
            <td>Marks</td>
          </tr>
        </thead>
        <tbody>
        {Data.filter((e)=>{
                if(search === ""){
                    return e
                }else if ((e.Username.toLowerCase()).includes(search.toLowerCase())){
                    return e
                }
            }).map((e,i) =>(
              <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                  <td>{i+1}</td>
                  <td>{e.Username}</td>
                  <td>{e.Marks}</td>
              </tr>
          ))}
        </tbody>
      </Table>
      </div>
      
    
    </Container>
      <br/>
      <br/>
      <br/>
      <br/>

    
    </>
  )
}

export default QuizResults