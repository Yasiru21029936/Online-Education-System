import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/esm/Table';
import { useNavigate } from 'react-router-dom';
import Staff from './Staff';

function HandleTeachers() {
    const[pendingTeachers,setPendingTeachers] = useState([]);
    const [search,setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        axios.get("http://localhost:8080/registrationTeacher/getPending").then(res =>{
            setPendingTeachers(res.data.pendingTeachers)
        }).catch(err =>{
            alert(err)
        })
    }, [])

    const changeStatus = (e) =>{
        // navigate to provide login with teacher details
        navigate('/Staff/ProvideLogin',{state : {props:e}})
    }
    

  return (
    <>
    <Staff/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <h1>Pending Teachers </h1>
        <br></br>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:20,alignItems:'center'}}>
            Search By Category :
              <select onChange={(e) =>{setSearch(e.target.value)}} required style={{marginLeft:20,fontWeight:'bold',width :300,textAlign:'center',borderRadius:20,padding:5}}>
                <option value = "">Select a Staff category</option>
                <option value = 'temporary'>Temporary</option>
                <option value = 'permanent'>Permanent</option>
                </select>
        </div>

    <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>First Name</th>
            <th>NIC</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {pendingTeachers.filter((element) => {
                if(search === ""){
                    return element
                }else if (element.category.includes(search)){
                    return element
                }
            }).map((e,i) =>(
                    <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                        <td>{e.fName}</td>
                        <td>{e.NIC}</td>
                        <td>{e.Gender}</td>
                        <td>{e.Email}</td>
                        <td>{e.MNumber}</td>
                        <td>{e.City}</td>
                        <td>
                        <td>
                            <center>
                            <Button variant="outline-primary" onClick={() => changeStatus(e)}>Update Status</Button>
                            </center>
                        </td>  

                        </td>
                    </tr>
            ))}
        </tbody>
    </Table>
    </Container>
    </>

  )
}

export default HandleTeachers