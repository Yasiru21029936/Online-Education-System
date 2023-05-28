import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Payments from './Payments';
import Table from 'react-bootstrap/Table';
import {HashLoader} from 'react-spinners';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Classfees() {
  const [total,setTotal] = useState(false);
  const [Class,setClass]= useState("select");
  const [type,setType]= useState("select");
  const [method,setMethod ]= useState();
  const [billRemark,setBillRemark] = useState();
  const [datafee,setDatafee] = useState([]);
  const [loading,setLoading] = useState(true);
  const [isOpen,setIsOpen] = useState(false); 
  const [popupImg,setPopupImg] = useState();

  useEffect(() => {
    if(Class === "select" || type === "select"){
      setTotal(false)
    }else{
      
      setTotal(true)
    }
  
  }, [Class,type])


  useEffect(() => {
    axios.get("http://localhost:8080/classfee/").then((res)=>{
      setDatafee(res.data.fee)
      setLoading(false)
    }).catch(err =>{
      alert(err)
    })
  
  }, [datafee])
  

  const fileUpload=(e) =>{
    // data.append("file", e.target.files[0]); //<-- CHANGED .value to .files[0]
    console.log("file set")
    setBillRemark(e.target.files[0])
  }

  const validate = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("Type",type);
    formData.append("Class",Class);
    formData.append("Method",method);

    if(method === "bank"){
      formData.append("Remark",billRemark);
      
      await axios.post("http://localhost:8080/classfee/addfee",formData).then((res)=>{
        // alert("Fee added")
        toast.success("Fee Added")
      }).catch(err =>{
        alert(err)
      })
    }else{
      console.log(formData);
      await axios.post("http://localhost:8080/classfee/addFeeOnline",formData).then((res)=>{
        // alert("Fee added")
        toast.success("Fee Added")
      }).catch(err =>{
        alert(err)
      })

    }

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
  
  return (
    <>
    <Payments/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <h1>Add Class fees</h1>
      <Form onSubmit={(e) =>{validate(e)}}>
          <Form.Group className="mb-3" >
            <Form.Label>Class Type</Form.Label>
              <Form.Select onChange = {(e) =>{setClass(e.target.value)}} required >
                <option value = "select">Select Class Type</option>
                <option value = 'a/l'>Advanced Level </option>
                <option value='o/l'>Oridinary Level</option>
                <option value='1-5'>Grade 1-5</option>
                <option value='6-9'>Grade 6-9</option>
              </Form.Select>
            </Form.Group>
          {Class !== "select" ? (
            <Form.Group className="mb-3" >
            <Form.Label>Select Class</Form.Label>
            <Form.Select  onChange = {(e) =>{setType(e.target.value)}}  required >
              <option value = "select">Select Class Type</option>
              <option value = 'Theory'>Theory</option>
              <option value = 'Revision'>Revision</option>
              <option value='Paper'>Paper</option>
            </Form.Select>
            </Form.Group>

            
              ):<></>}

            {type !== "select"?(
            <Form.Group className="mb-3" >
            <Form.Label>Select Payment method</Form.Label>
            <Form.Select onChange = {(e) =>{setMethod(e.target.value)}} required >
              <option value='Online'>Online (visa/Master)</option>
              <option value='bank'>Bank Slip</option>
            </Form.Select>
            </Form.Group>
              ):<></>}

            <div style={{fontSize:25,margin:10}}>
            </div>
            {total && method === "bank"? (
                  <>
                  <h2>Total Amount : Rs.2500/=</h2>
                    <Form.Group className="mb-3">
                      <Form.Label>File remark:</Form.Label>
                      <Form.Control type="file"  onChange={(e) =>{fileUpload(e)}} accept="image/*" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Confirm & Pay
                  </Button>
                  </>
                  ):<>
              </>}
              {total && method !== "bank"? (
                <>
                <h2>Total Amount : Rs.2500/=</h2>
              <h7>*Additional 3% will be added to the total when you use the Online pay method</h7><br></br>
              <Button variant="primary" type="submit">
                Confirm & Pay
              </Button>
                </>
              ):<></>}
      <ToastContainer position="top-center" autoClose={500} hideProgressBar/>

      </Form>

      {loading ? (<div style={{display : 'flex',justifyContent : 'center',alignItems : 'center',height : '100%',marginTop : '10%'}}><HashLoader color="#3637da" /> </div>) : (

        <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
        <thead>
            <tr>
            <th>Index</th>
            <th>Class</th>
            <th>Type</th>
            <th>Method</th>
            <th>Remark</th>
            </tr>
        </thead>
        <tbody>
            {datafee.map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.Class}</td>
                    <td>{e.Type}</td>
                    <td>{e.Method}</td>
                    <td><Button variant="outline-primary" onClick = {() => {showPopUp(e.Remark)}} style={{fontSize : 12,fontWeight : 'bold'}}>Show Remark</Button></td>
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
              src={'http://localhost:8080/Assests/classfees/'+popupImg}
              alt="no image"
              />
          </dialog>

        ):<></>}

</div>

    </Container>
    </>
  )
}

export default Classfees