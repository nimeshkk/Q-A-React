
import React, { useEffect, useState } from 'react'
import "./Q.css"

export default function Q1({
  data,
  setTimeOut,
  questionNumber,
  setQuestionNumber,
})
{ 
  const [question, setQuestion]=useState(null);
  const [selectedAnswer ,setSelectedAnswer]=useState(null);
  const [className, setClassName]=useState("answer");

  useEffect(()=>{
    setQuestion(data[questionNumber - 1])
    },[data,questionNumber]);

  const handleClick = (a) =>{
    setSelectedAnswer(a);
    setClassName("answer active");
  
  }
  
  return (
    <div>
       <div className="Q1">
         <div className="question">{question?.question}</div>
         <div className="answers">
          {question?.answers.map((a) =>(
           <div 
           className={selectedAnswer === a? className: "answer"}
            onClick={() => handleClick(a)}
            >
            {a.text}</div>
          ))}
            
           
        </div>
       </div>
    </div>
  )
}
