import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Classes from './Classes';
import Form from 'react-bootstrap/Form';


function EditClass() {

    const[classData, setClass] = useState([]);
    const [search,setSearch] = useState("");
    const navigate = useNavigate();

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
        
        
        <h2>Manage Classes</h2>
        <br></br>

        <div style={{flex : 1, display : 'flex', justifyContent : 'right'}}>
            <Link to = "/Classes/AddClass"><Button variant = "primary" type="submit">Add new Class</Button></Link>
        </div>

        <br></br>

        <center>
            <Form className="d-flex" style={{width : '60%', marginTop : '-63px' }}>

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
        </center>

        <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
            <thead>
                <tr>
                    <th>Class Name</th>
                    <th>Class Type</th>
                    <th>Grade</th>
                    <th>Class Date</th>
                    <th>Edit</th>
                
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
                <tr key = {i} style={{textAlign : 'center',fontWeight : '400'}}>
                        <td>{elm.CName}</td>
                        <td>{elm.CType}</td>
                        <td>{elm.Grade}</td>
                        <td>{elm.CDate}</td>
                        <td>
                            <Button variant="outline-primary" onClick={() => {updateDetails(elm)}}>Edit</Button>     <Button  variant="outline-danger" onClick={() => deleteRecord(elm)}>Delete</Button>
                        </td> 
                    </tr>
            ))}
            </tbody>
        </Table>

        

    </Container>
    
    </>
    
  )
}

export default EditClass