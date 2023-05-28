import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import Payments from './Payments';
import Table from 'react-bootstrap/Table';
import generatePDF from '../../components/Quiz_Management/ReportGenerator';
import { toast, ToastContainer } from 'react-toastify';
import { UserDetails } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Salary() {

  

  const navigate =  useNavigate();


  useEffect(() => {
    const role = localStorage.getItem("Role");
    if(role === "Admin" || role === "Staff"){
      // alert("kanishka")
      // toast.success("Admin Found")
    }else{
      toast.success("No user")
      navigate("/Payments/Classfees")
    }
  }, [])
  


  const [Category,setCategory] = useState("select");
  const [Employee,setEmployee] = useState("select");
  const [Account,setAccount] = useState("");
  const [Amout,setAmout] = useState("");
  const [data,setData]= useState([]);
  const [update,setUpdate] = useState(false)
  const [search,setSearch] = useState("");

  const [employeeArray,setEmployeeArray] = useState([]);

  const columnsPDF = [{ Category:'Category',Employee:'Employee',Account:'Account',date:'Date',Amount : 'Amount' }]
  // const columnsPDF = [{ Category:'Category',Employee:'Employee'}]

  const[id,setId]= useState();
  
  const AddSalary = (e) => { 
    e.preventDefault();
    const formData = {
      Category,
      Employee,
      Account,
      date : new Date(), 
      Amout
    }
    // console.log(formData)
    axios.post("http://localhost:8080/salary/addSalary",formData).then((res) =>{
      toast.success("Salary Added")
    }).catch(err =>{
      toast.error("Employee Salary Exists or Account Number cannot be same as an other employee")
    })
  }

  useEffect(() => {
    axios.get("http://localhost:8080/salary").then((res) =>{
      setData(res.data.salary)
    }).catch(err =>{
      alert(err)
    })

    // get all employees

    
  }, [data])
  
  useEffect(() => {
    axios.get("http://localhost:8080/authUser/getEmployees").then((res) =>{
      setEmployeeArray(res.data.Employees)
    }).catch(err =>{
      alert(err)
    })
  }, [])
  

  
  const DateFormat = (date) =>{
    var d = new Date(date);

    var date = ("0" + (d.getDate())).slice(-2);
    var month = ("0" + (d.getMonth() + 1)).slice(-2);
    var year = d.getFullYear();
    var newDate = date + "/" + month + "/" + year;

    return newDate;

}

const deleteData = (e) =>{

  if(window.confirm("Conform Delete Bill ? ") == true){

    axios.delete(`http://localhost:8080/salary/delete/${e._id}`).then((res) =>{
        console.log("deleted")
      }).catch(err =>{
        alert(err)
      })
}


}

const updateDetails = (e) =>{
  setUpdate(true)
  setCategory(e.Category)
  setEmployee(e.Employee)
  setAccount(e.Account)
  setAmout(e.Amout)
  setId(e._id)

}

const updateSalary = ()=>{

  const formData = {
    Category,
    Employee,
    Account,
    date:new Date(),
    Amout,
    id
  }

  axios.put(`http://localhost:8080/salary/update`,formData).then((res) =>{
    toast.success("Salary Updated")
    setUpdate(false);
  }).catch(err =>{
    // alert(err)
    toast.warn(err)
  })

}

const findEmployees = async (e)=>{
  setCategory(e)
    await axios.post("http://localhost:8080/authUser/getEmployeesCat",{category:e}).then((res) =>{
      // console.log(res.data.Employees)
      setEmployeeArray(res.data.Employees)
    }).catch(err =>{
      alert(err)
    })
}
  return (
    <>
    <Payments/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <h1>Add Salaries</h1>
      <Form onSubmit={(e) =>{AddSalary(e)}} >
            <Form.Group className="mb-3" >
              <Form.Label>Select Employee Category to begin</Form.Label>
              <Form.Select value = {Category} onChange = {(e)=>{findEmployees(e.target.value)}} required >
                <option value = 'select' selected>Select Employee Category</option>
                <option value = 'Teacher'>Teacher</option>
                <option value = 'SupportStaff'>Support Staff</option>
                <option value='Staff'>Staff</option>
                <option value='Temporary'>Temporary</option>
                <option value='Staff'>Staff</option>
                <option value='Admin'>Admin</option>
              </Form.Select>
            </Form.Group>
          {Category !== "select" ? (
            <>
            <Form.Group className="mb-3" >
              <Form.Label>Select {Category}</Form.Label>
              <Form.Select value = {Employee} onChange = {(e)=>{setEmployee(e.target.value)}} required >
              <option value = 'select' selected>Select Employee</option>
                {employeeArray.map((el,i)=>(
                  <option key={i} value = {el.name}>{el.name}</option>
                  ))}
              </Form.Select>
            </Form.Group>
            </>
            ):<></>}

            {Employee !== 'select' ? (<>
            <Form.Group className="mb-3" controlId="accountNumber">
              <Form.Label>Bank Account Number</Form.Label>
              <Form.Control type="number" placeholder="Account Number" value = {Account} onChange = {(e)=>{setAccount(e.target.value)}}  required />
            </Form.Group>
            </>):<></>}

            {Account !== "" ? (<>
              <Form.Group className="mb-3" controlId="accountNumber">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Amount" value = {Amout} onChange = {(e)=>{setAmout(e.target.value)}} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Salary
            </Button>
            </>):<></>}
            

            

            {/* <Form.Group className="mb-3" controlId="billDate">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" value = {date} onChange = {(e)=>{setDate(e.target.value)}} required min="1997-01-01" max="2030-12-31" />
            </Form.Group> */}


            {update ? (
            <Button varient= "primary" onClick={updateSalary} style={{marginLeft:20}}>
              Update Salary
            </Button>
            ):<></>}
            
            <ToastContainer position="top-center" autoClose={8080}/>
          </Form>


    </Container>

    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
    <h2>Approved Salaries</h2>
    <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:20,alignItems:'center'}}>
            Search By Category :
              <select onChange={(e) =>{setSearch(e.target.value)}} required style={{marginLeft:20,fontWeight:'bold',width :300,textAlign:'center',borderRadius:10,padding:5}}>
                <option value = "">Select an employee category</option>
                <option value = 'Teacher'>Teacher</option>
                <option value = 'SupportStaff'>Support Staff</option>
                <option value='Staff'>Staff</option>
                <option value='Temporary'>Temporary</option>
                <option value='Staff'>Staff</option>
                <option value='Admin'>Admin</option>
                </select>
        </div>
              
    <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20,marginRight:40}}>
        <thead>
            <tr>
            <th>Index</th>
            <th>Category</th>
            <th>Employee</th>
            <th>Account</th>
            <th>Date</th>
            <th>Amout</th>
            <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {
            data.filter((element)=>{
                if(search === ""){
                    return element
                }else if (element.Category.includes(search)){
                    return element
                }
            }).map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.Category}</td>
                    <td>{e.Employee}</td>
                    <td>{e.Account}</td>
                    <td>{DateFormat(e.date)}</td>
                    <td>{e.Amout}</td>
                    <td><Button variant="outline-primary"  style={{fontSize : 12,fontWeight : 'bold',marginRight:10}} onClick = {() => {updateDetails(e)}}>Update</Button>
                    <Button variant="outline-danger"  style={{fontSize : 12,fontWeight : 'bold'}} onClick = {() => {deleteData(e)}}>Delete</Button>
                    </td>
                </tr>
            ))}
    
        </tbody>
        </Table>
        <Button varient = "outline-primary" onClick={
                () => generatePDF(
                data.map(m => ({
                  // const columnsPDF = [{ Category:'Category',Employee:'Employee',Account:'Account',date:'Date',Amount : 'Amount' }]
                  Category: m.Category,
                  Employee: m.Employee,
                  Account : m.Account,
                  date:DateFormat(m.date),
                  Amount : m.Amout,
                }
          )), columnsPDF, false, "Sample")} style = {{marginBottom:20}}>Download Salary Report</Button>
        </Container>
    </>
  )
}

export default Salary