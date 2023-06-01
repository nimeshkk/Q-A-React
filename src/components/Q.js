
import React, { useEffect, useState } from 'react'
import "./Q.css"

export default function Q1({data,setTimeOut,questionNumber,setQuestionNumber})
{ {
  const [question, setQuestion]=useState(null);

  useEffect(()=>{
    setQuestion(data[questionNumber - 1])
    },[data,questionNumber]);
  }
  return (
    <div>
       <div className="Q1">
         <div className="question">{question?.question}</div>
         <div className="answers ">
          {question?.answers.map((a) =>(
          <div className="answer">{a.text}</div>
          ))}
            
           
        </div>
       </div>
    </div>
  )
}
