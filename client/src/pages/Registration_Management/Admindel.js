import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
//import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import generatePDF from '../../components/Quiz_Management/ReportGenerator';



function Admindel() {

  const [staffName,setStaffName] = useState([]);
  const navigate = useNavigate();
  const [search,setSearch] = useState("");

  const columnsPDF = [{ Name:'Name',UserName:'User Name',Mobile:'Mobile',Email:'Email',Role : 'User Role' }]


    useEffect(() => {
      axios.get("http://localhost:8080/authUser/getStudentTeacher").then((res) =>{
        // console.log(res.data.Users)
          setStaffName(res.data.Employees);

      }).catch((e) =>{
          alert(e)
      })


  }, [staffName])

  const deleteRecord = (e) =>{
    console.log(e);
    axios.delete(`http://localhost:8080/authUser/deleteUser/${e}`).then(res =>{
      alert("Employee Deleted !")
      console.log(res.state)
    }).catch(err => {
      alert(err);
    })
    
  }
  const UpdateStaff =(data) =>{
    // console.table(data._id)
    // navigate('/Edit/UpdateStaff',{state : {props : data}})
    navigate('/UpdateUserProfile',{state : {props : data}})
  
  }
  
  return (
    <>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>Manage Profiles</h2>
      <br></br>
      <div class="input-group">
      {/* <Link to = "/Staff/Profile"><Button variant="primary">+ Add New Employee</Button></Link> */}
      <div style={{flex : 1,display : 'flex',justifyContent : 'right' }}>
        <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}}  placeholder="Search Name" style={{border:'3px solid black', borderRadius:'5px', marginRight:'3px'}} />
        <Button >Search</Button>
        {/* <input class="button--submit" value="Search" type="submit"></input> */}
      </div>  
      </div>

      <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th>Index Number</th>
          <th> Name</th>
          <th> User Name</th>
          <th> Mobile</th>
          <th> Email</th>
          <th> Role</th>
          <th>Manage Member</th>
          
        </tr>
      </thead>
      <tbody>
          {staffName.filter((element) => {
                if(search === "" && element.Role !== 'Staff' && element.Role !== 'SupportStaff' && element.Role !== 'Temporary' && element.Role !== 'Admin'){
                    return element
                }else if (element.name.toLowerCase().includes(search.toLowerCase()) && element.Role !== 'Staff' && element.Role !== 'SupportStaff' && element.Role !== 'Temporary' && element.Role !== 'Admin'){
                    return element
                }
            }).map((e,id) =>(
                        <tr key={id} style={{textAlign : 'center',fontWeight : '400'}}>
                            <td>{id+1}</td>
                            <td>{e.name}</td>
                            <td>{e.userName}</td>
                            <td>{e.mobile}</td>
                            <td>{e.Email}</td>
                            <td>{e.Role}</td>
                            <td><center><Button variant="outline-primary" onClick={() => UpdateStaff(e)}>Edit</Button>        <Button variant="outline-danger" onClick={() => deleteRecord(e._id)}>Delete</Button></center></td>  
                        </tr>
          ))}
          
      </tbody>
      </Table>
      
      <Button varient = "outline-primary" onClick={
                () => generatePDF(
                  staffName.map(m => ({
                  Name: m.name,
                  UserName: m.userName,
                  Mobile: m.mobile,
                  Email: m.Email,
                  Role: m.Role,
                }
          )), columnsPDF, false, "ProfileManagement")} style = {{marginBottom:20}}>Download profile Details</Button>
    </Container>
    </>
  )
  
}

export default Admindel