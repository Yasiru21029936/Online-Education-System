import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router-dom';
import generatePDF from '../../components/Quiz_Management/ReportGenerator';

function Attendanceform() {

  const [Class,setClass] = useState();
  const [classType,setClassType] = useState();
  const [Regno,setRegno] = useState();
  const [data,setData]= useState([]);
  const [update,setUpdate] = useState(false)
  const[id,setId]= useState();
  const location = useLocation();
  const columnsPDF = [{ Class:'Class',ClassType:'Class Type',RegNo:'Registration Number',atDate:'Date'}]
  
  const {
    ClassName,
    ClassType,
    Grade
  } = location.state.props;
  // console.log(location.state.props);
  useEffect(() => {
    setClass(Grade)
    setClassType(ClassName)
    // console.log(ClassName);
  })
  const Addattendence = (e) => { 


    e.preventDefault();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const formData = {
      Class,
      classType,
      Regno,
      date, 
    }
    // console.log(formData)
    axios.post("http://localhost:8080/Attendence/addAttendance",formData).then((res) =>{
      alert("Attendance Added!")
    }).catch(err =>{
      alert(err)
    })
  }

  useEffect(() => {
    axios.post("http://localhost:8080/Attendence/getAtten",{Grade:Class, ClassName:classType}).then((res) =>{
      setData(res.data.Attendance)
    }).catch(err =>{
      alert(err)
    })

    

  }, [data])

  
  const DateFormat = (date) =>{
    var d = new Date(date);

    var date = ("0" + (d.getDate())).slice(-2);
    var month = ("0" + (d.getMonth() + 1)).slice(-2);
    var year = d.getFullYear();
    var newDate = date + "-" + month + "-" + year;

    return newDate;

}

const deleteData = (e) =>{
  axios.delete(`http://localhost:8080/Attendence/delete/${e._id}`).then((res) =>{
      alert("Deleted")
    }).catch(err =>{
      alert(err)
    })

}

const updateDetails = (e) =>{
  setUpdate(true)
  setClass(e.Class)
  setClassType(e.classType)
  setRegno(e.Regno)
  setId(e._id)

}

const updateAttendance = ()=>{
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const formData = {
    Class,
    classType,
    Regno,
    date,
    id
  }

  axios.put(`http://localhost:8080/Attendence/update`,formData).then((res) =>{
    setRegno("")
    alert("Updated")
    setUpdate(false);
  }).catch(err =>{
    alert(err)
  })



}
  
  return (
    <>
    <Container style={{marginTop:'1%', display: 'block', width : '50%',justifyContent : 'center'}}>
    <form className='form1'  onSubmit={(e) =>{Addattendence(e)}}> 
            <Form.Group className="mb-3" >
              <Form.Label>Class</Form.Label>
              <Form.Select value ={Class} onChange={(e)=>{setClass(e.target.value)}} required>
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

            <Form.Group className="mb-3" >
              <Form.Label>Class Type</Form.Label>
              <Form.Select onChange={(e)=>{setClassType(e.target.value)}} value = {classType} required >
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
      <Form.Label>Registration Number</Form.Label>
      <Form.Control type= "text" onChange={(e)=>{setRegno(e.target.value)}} value = {Regno} required/>

    <br></br>
      <div style={{justifyContent:'space-between',display:'flex'}}>
      <Button varient= "primary" type= "submit">
        Make Attendance
      </Button>
      {update ? (
        <Button varient= "primary" onClick={updateAttendance}>
        Update Attendance
      </Button>
        ):<></>}
      </div>
    </form>
  </Container>
    <h2>Now in this class</h2>
    <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20,marginRight:40}}>
        <thead>
            <tr>
            <th>Class</th>
            <th>Class Type</th>
            <th>Registration Number</th>
            <th>Date</th>
            <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {data.map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{e.Class}</td>
                    <td>{e.classType}</td>
                    <td>{e.Regno}</td>
                    <td>{DateFormat(e.atDate)}</td>
                    <td><Button variant="outline-primary"  style={{fontSize : 12,fontWeight : 'bold',marginRight:10}} onClick = {() => {updateDetails(e)}}>Update</Button>
                    <Button variant="outline-danger"  style={{fontSize : 12,fontWeight : 'bold'}} onClick = {() => {deleteData(e)}}>Delete</Button>
                    </td>
                </tr>
            ))}
    
        </tbody>
        </Table>

        {/* <Button>download here</Button> */}
        <Button varient = "outline-primary" onClick={
          () => generatePDF(
              data.map(m => ({
              Class: m.Class,
              ClassType: m.classType,
              RegNo: m.Regno,
              atDate: m.atDate,
            }
            )), columnsPDF, false, Class +" "+ classType)} style = {{marginBottom:20, marginLeft:'15px'}}>Download Attendance Sheet</Button>

    </>
)




}

export default Attendanceform