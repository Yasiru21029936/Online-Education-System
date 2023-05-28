// import React from 'react'

// import axios from "axios"
// import { useState } from "react";

// // function questions() {

// //     const getQuestion = (id) => {
// //         axios.get(`http://localhost:8080/QuizMCQDB/getQuestion/${tempid}`).then((MCQ)=>{
// //             // console.log(MCQ.data.SendData);
// //             MCQ.data.SendData.map((e,i) =>{
// //               var tempArray = [];
// //               tempArray.push(e._id)
// //               tempArray.push(JSON.parse(e.QMCQID))
// //               Quizes.push(tempArray);
// //             })
// //         }
// //     }
// //   return (
// //     <div>questions</div>
// //   )
// // }

// // export default questions

// const [question,SetQuestion] = useState([]);

// var questions =[];

// const getQuestion = async (id)=>{
//     await axios.get(`http://localhost:8080/QuizMCQDB/getQuestion/${id}`).then(res =>{
//         console.log(res.data.quiz)
//         SetQuestion(res.data.quiz)
//     })
// }

// // question.map((e,i)=>{
// //      question.push()
// // })



export const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "HI", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
// module.exports = {getQuestion}