import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Classes from './Classes';
import Form from 'react-bootstrap/Form';
import generatePDF from '../../components/Quiz_Management/ReportGenerator'


function ClassesList() {

    const[classData, setClass] = useState([]);
    const [ClassName, setClassName] = useState();
    const [search,setSearch] = useState("");
    const navigate = useNavigate();
    const columnsPDF = [{ CName:'CName',CType:'CType',Grade:'Grade',CDate:'CDate' }]
    const Module = (elem) => {
        navigate("/Classes/ModulePage", {state:{props:elem}})
    }

    useEffect(() => {
        axios.get("http://localhost:8080/Class").then((res) => {
            setClass(res.data.classes);
        }).catch(e => {
            alert(e)
        })
    }, [classData])

    const deleteRecord = (e) => {
        axios.delete(`http://localhost:8080/Class/delete/${e._id}`).then(res => {
            alert("Class Deleted !")
            console.log(res.state)
        }).catch(err => {
            alert(err);
        })
    }

    const updateDetails = (data) => {
        navigate('/EditClass/UpdateClass',{state : {data : data}})
    }

  return (

    <>
    <Classes/>

    <Container style={{marginTop : '1%', display : 'block',width : '100%',justifyContent : 'center'}}>
        
        
        <h2>Classes</h2>
        <br></br>

        <center>
            <Form className="d-flex" style={{width : '60%', marginTop : '-63px' }}>

            <Form.Control
              type="search"
              value = {search}
              placeholder="Class Name"
              className="me-2"
              aria-label="Search"
              onChange={(e) =>{setSearch(e.target.value)}}
            />
            <Button >Search</Button>
          </Form>
        </center>

        <div style={{flex : 1,display : 'flex',justifyContent : 'right', marginRight:'16px' }}>

        <Button onClick={() => generatePDF(
          classData.map(m => ({
          CName: m.CName,
          CType: m.CType,
          Grade: m.Grade,
          CDate: m.CDate
   		 }
    )), columnsPDF, false, "Class List")} 

      type='submit'style={{fontWeight : 'bold', marginLeft:'16px'}}>
            Download
        </Button>
      </div>

        <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
            <thead>
                <tr>
                    <th>Class Name</th>
                    <th>Class Type</th>
                    <th>Grade</th>
                    <th>Class Date</th>               
                </tr>
            </thead>
            <tbody>

            {classData.filter((element) => {
                if(search === ""){
                    return element
                }else if ((element.CName.toLowerCase()).includes(search.toLowerCase())) {
                    return element
                }
            }).map((elm,i) => (
                <tr key = {i} onClick={() => {Module(elm)}} style={{textAlign : 'center',fontWeight : '400'}}>
                        <td>{elm.CName}</td>
                        <td>{elm.CType}</td>
                        <td>{elm.Grade}</td>
                        <td>{elm.CDate}</td>
                    </tr>
            ))}
            </tbody>
        </Table>

        

    </Container>
    
    </>
    
  )
}

export default ClassesList