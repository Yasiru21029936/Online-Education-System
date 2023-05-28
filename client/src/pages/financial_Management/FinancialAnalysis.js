import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Payments from './Payments';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserDetails } from '../../context/UserContext';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FinancialAnalysis() {

    const [utility,setUtility] = useState([]);
    const [payment,setPayment] = useState([]);
    const [classf,setClassf] = useState([]);

    const navigate =  useNavigate();

    useEffect(() => {
      const role = localStorage.getItem("Role");
      if(role === "Admin"){
      }else{
        navigate("/Payments/Classfees")
      }
    }, [])

    useEffect(() => {

        axios.get("http://localhost:8080/Bill/getCount").then(res =>{
          const array = res.data.number;
          const sortedArray = JSON.parse(array).sort();

          for(let i=0;i<4;i++){
            const elem =sortedArray[i].split(":")[1];
            // console.log(elem)
            setUtility(oldArray => [...oldArray,elem]);
          }
        })
        
        axios.get("http://localhost:8080/classfee/getCount").then(res =>{
          const array = res.data.number;
          const sortedArray = JSON.parse(array).sort();

          // console.log(sortedArray)

          for(let i=0;i<3;i++){
            const elem =sortedArray[i].split(":")[1];
            setPayment(oldArray => [...oldArray,elem]);
          }
        })

        axios.get("http://localhost:8080/classfee/getCountType").then(res =>{
          const array = res.data.number;
          const sortedArray = JSON.parse(array).sort();

          console.log(sortedArray)

          for(let i=0;i<3;i++){
            const elem =sortedArray[i].split(":")[1];
            console.log(elem)
            setClassf(oldArray => [...oldArray,elem]);
          }
        })



    }, [])
    

    const UtilityData ={
        labels: ['Internet', 'Other', 'Telephone', 'Water'],
        datasets: [
          {
            label: '# of Votes',
            // data: [12, 19, 3,10],
            data: [utility[0],utility[1],utility[2],utility[3]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 2,
          },
        ],
    }

    const methodData ={
        labels: ['Online', 'Bank', 'Other'],
        datasets: [
          {
            label: '# of Votes',
            data: [payment[0],payment[1],payment[2]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2,
          },
        ],
    }

    const classData ={
        labels: ['Paper', 'Revision', 'Theory'],
        datasets: [
          {
            label: '# of Votes',
            data: [classf[0],classf[1],classf[2]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2,
          },
        ],
    }


  return (
    <>
    <Payments/>
    <h1>Financial Analysis</h1>
    <div style={{display:'flex'}}>

        <div style={{backgroundColor : 'white',width : 450,borderRadius:20,boxShadow: '1px 2px 9px black',margin :20,padding :20}}>
            <h3 style={{color:'black',marginBottom:20}}>Utility Payments Analysis</h3>
            <Pie data={UtilityData} />
        </div>
        <div style={{backgroundColor : 'white',width : 450,borderRadius:20,boxShadow: '1px 2px 9px black',margin :20,padding :20}}>
        <h3 style={{color:'black',marginBottom:20}}>Payment Method Analysis</h3>
            <Pie data={methodData} />
        </div>
        <div style={{backgroundColor : 'white',width : 450,borderRadius:20,boxShadow: '1px 2px 9px black',margin :20,padding :20}}>
        <h3 style={{color:'black',marginBottom:20}}>Class fees Analysis</h3>
            <Pie data={classData} />
        </div>
    </div>
    </>
  );
}
