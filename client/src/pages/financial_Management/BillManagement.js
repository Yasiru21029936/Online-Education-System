import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {HashLoader} from 'react-spinners';
import axois from 'axios';
import { useNavigate } from 'react-router-dom';
import Payments from './Payments';
import '../../Styles/model.css'
import axios from 'axios';
import { UserDetails } from '../../context/UserContext';

function BillManagement() {
    const [loading,setLoading] = useState(true);
    const [bills,setBills] = useState([]);
    const [isOpen,setIsOpen] = useState(false); 
    const [popupImg,setPopupImg] = useState();
    const [search,setSearch] = useState("");

    const {user,setUser} = UserDetails();
    const navigate = useNavigate();
    


    useEffect(() => {
        const role = localStorage.getItem("Role");
        if(role === "Admin" || role === "Staff" || role === "SupportStaff"){
            // alert("kanishka")
            // toast.success("Admin Found")
        }else{
            navigate("/Payments/Classfees")
        }
        }, [])
          
        
    useEffect(() => {

        axois.get("http://localhost:8080/Bill/").then((res) =>{
            setBills(res.data.Bills);

            // setTimeout(() => {
                setLoading(false);
            //   }, 1000);

        }).catch((e) =>{
            alert(e)
        })

    }, [bills])
    

    const newBill = () =>{
        navigate('/Payments/Utility/AddNew')
    }

    const DateFormat = (date) =>{
        var d = new Date(date);

        var date = ("0" + (d.getDate())).slice(-2);
        var month = ("0" + (d.getMonth() + 1)).slice(-2);
        var year = d.getFullYear();
        var newDate = date + "-" + month + "-" + year;

        return newDate;

    }
    const showPopUp = (e) =>{
        if(isOpen){
          setIsOpen(false)
          setPopupImg("")
        }else{
          setPopupImg(e)
          setIsOpen(true)
        }
    
      }

    const deleteBill = (e) =>{
        if(window.confirm("Confirm Delete Bill ? ") === true){

            const id = e._id;
    
            axios.delete(`http://localhost:8080/Bill/delete/${id}`).then((res)=>{
                alert(res.data.state)
            })
        }

    }

  return (
    <>
    <Payments/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <h1>Utility Bills</h1>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right'}}>
            <Button variant="primary" onClick={newBill} style={{fontWeight : 'bold'}}>+ Add New</Button>
        </div>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:20,alignItems:'center'}}>
            Search By Category :
              <select onChange={(e) =>{setSearch(e.target.value)}} required style={{marginLeft:20,fontWeight:'bold',width :300,textAlign:'center',borderRadius:10,padding:5}}>
                <option value = "">Select a bill category</option>
                <option value = 'water'>Water</option>
                <option value = 'telehpone'>Telephone</option>
                <option value='internet'>Internet</option>
                <option value='other'>Other</option>
                </select>
        </div>


        {loading ? (<div style={{display : 'flex',justifyContent : 'center',alignItems : 'center',height : '100%',marginTop : '10%'}}><HashLoader color="#3637da" /> </div>) : (

        <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Index</th>
            <th>Category</th>
            <th>Description</th>
            <th>Account</th>
            <th>Payment Date</th>
            <th>Remark</th>
            </tr>
        </thead>
        <tbody>
            {
            bills.filter((element) => {
                if(search === ""){
                    return element
                }else if (element.BillCategory.includes(search)){
                    return element
                }
            }).map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.BillCategory}</td>
                    <td>{e.Description}</td>
                    <td>{e.Account}</td>
                    <td>{DateFormat(e.Date)}</td>
                    <td>
                        <Button variant="outline-primary" onClick = {() => {showPopUp(e.Remark)}} style={{fontSize : 12,fontWeight : 'bold'}}>Show Remark</Button>
                        <Button variant="outline-danger" onClick = {() => {deleteBill(e)}} style={{fontSize : 12,fontWeight : 'bold',marginLeft:10}}>Delete</Button>
                    </td>
                </tr>
            ))}
    
        </tbody>
        </Table>
        )}

    <div>
      {isOpen ? (
        <dialog
        className="dialog"
        style={{ position: "absolute" }}
        open
        >
            <div onClick={() => {showPopUp('No')}} style = {{cursor : 'pointer',marginBlock : 10,justifyContent : 'right',display : 'flex'}}><img src = {require('../../Styles/Images/close.png')} alt = ''/></div>
            <img
              className="image"
              src={'http://localhost:8080/Assests/UtilityBills/'+popupImg}
              alt="no image"
              />
          </dialog>

        ):<></>}

    </div>

    </Container>
    </>
  )
}

export default BillManagement