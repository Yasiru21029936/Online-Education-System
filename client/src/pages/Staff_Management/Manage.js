import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Staff from './Staff';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import '../../Styles/searchStaff.css'

function Manage() {

  const [staffName,setStaffName] = useState([]);
  const navigate = useNavigate();
  const [search,setSearch] = useState("");

    useEffect(() => {
      axios.get("http://localhost:8080/authUser/").then((res) =>{
        // console.log(res.data.Users)
          setStaffName(res.data.Users);

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
    navigate('/Edit/UpdateStaff',{state : {props : data}})
  
  }
  
  return (
    <>
    <Staff/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>Employee</h2>
      <br></br>
      <div class="input-group">
      <Link to = "/Staff/Profile"><Button variant="primary">+ Add New Employee</Button></Link>
      <div style={{flex : 1,display : 'flex',justifyContent : 'right' }}>
        <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}}  placeholder="Search Name" />
        <input class="button--submit" value="Search" type="submit"></input>
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
          {staffName.filter((element)=>{
                if(search === "" && element.Role !== 'Teacher' && element.Role !== 'student'){
                    return element
                }else if (element.name.includes(search) && element.Role !== 'Teacher' && element.Role !== 'student'){
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
    </Container>
    </>
  )
  
}

export default Manage