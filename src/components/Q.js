
import React, { useEffect, useState } from 'react'
import "./Q.css"

export default function Q1({
  data,
  setStop,
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


    const delay =(duration,callback) =>{
      setTimeout(()=>{
        callback();
      },duration);
    }

  const handleClick = (a) =>{
    setSelectedAnswer(a);
    setClassName("answer active");

    delay(2000,()=>
    setClassName(a.correct? "answer correct":"answer wrong")
    );

    delay(4000,()=>{
      if(a.correct){
        setQuestionNumber((prev)=>prev + 1);
        setSelectedAnswer(null);
      }else{
        setStop(true);
      }
    }
   
    );
    // setTimeout(()=>{
    //    setClassName(a.correct? "answer correct":"answer wrong")
    // },3000)
  
  };
  
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
