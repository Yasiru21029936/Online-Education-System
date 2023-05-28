import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import generatePDF from '../../components/Quiz_Management/ReportGenerator';
import { useNavigate } from 'react-router-dom';
import Staff from './Staff';

function Reports() {
    const [staffName,setStaffName] = useState([]);
    const navigate = useNavigate();
    const [search,setSearch] = useState("");

    const columnsPDF = [{ Name:'Name',Email:'Email',Mobile:'Mobile',User:'User',Role : 'Role' }]

useEffect(() => {
     axios.get("http://localhost:8080/authUser/getEmployeeWst").then((res) =>{
        // console.log(res.data.Users)
        setStaffName(res.data.Employees);
  
        }).catch((e) =>{
            alert(e)
        })
  
}, [staffName])
    
  return (
    <>
    <Staff/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <h1>All Employees in the Shahethra Education</h1>
        <br></br>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:20,alignItems:'center'}}>
            Search By Category :
              <select onChange={(e) =>{setSearch(e.target.value)}} required style={{marginLeft:20,fontWeight:'bold',width :300,textAlign:'center',borderRadius:20,padding:5}}>
                <option value = "">Select a Staff category</option>
                <option value = 'Staff'>Staff</option>
                <option value = 'SupportStaff'>Support Staff</option>
                <option value = 'Temporary'>Temporary</option>
                <option value = 'Admin'>Admin</option>
                </select>
        </div>

    <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Index Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>User Name</th>
            <th>Staff Category</th>
            </tr>
        </thead>
        <tbody>
            {staffName.filter((element)=>{
                if(search === "" && element.Role !== 'Teacher' && element.Role !== 'student'){
                    return element
                }else if (element.Role.includes(search)&& element.Role !== 'Teacher' && element.Role !== 'student'){
                    return element
                }
            }).map((e,i) =>(
                    <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                        <td>{i+1}</td>
                        <td>{e.name}</td>
                        <td>{e.Email}</td>
                        <td>{e.mobile}</td>
                        <td>{e.userName}</td>
                        <td>{e.Role}</td>
                    </tr>
            ))}
        </tbody>
    </Table>
    <Button varient = "outline-primary" onClick={
                () => generatePDF(
                staffName.map(e => ({
                  Name: e.name,
                  Email: e.Email,
                  Mobile: e.mobile,
                  User: e.userName,
                  Role : e.Role,
                }
          )), columnsPDF, false, "Sample")} style = {{marginBottom:20}}>Download All Employees Report</Button>
    </Container>
    </>
  )
}

export default Reports