import logo from './logo.svg';
import './App.css';
import  "./app1.css";
import { useEffect, useState } from 'react';
import Q from './components/Q';
import Timer from './components/Timer';





function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop]=useState(false);
  const[earned, setEarned]=useState("$ 0");
  

  const data =[
   {
    id:1,
    question :"Which of the following programming languages is not statically typed?",
    answers: [
      {
        text:"C",
        correct: false,
      },
      {
        text:"Java",
        correct:false,
      },
      {
        text:"Python",
        correct:true,
      },
      {
        text:"C++",
        correct:false,
      },
    ],
   },

   {
    id:2,
    question :"Which of the following sorting algorithms has the worst-case time complexity of O(n^2)?",
    answers:[
      {
        text:" Bubble sort",
        correct:true,
      },
      {
        text:"Quick sort",
        correct:false,
      },
      {
        text:"Merge sort",
        correct:false,
      },
      {
        text:"Insertion sort",
        correct:false,
      }
    ]
   },


   {
    id:3,
    question :"In computer networking, which protocol is commonly used for sending and receiving emails?",
    answers:[
      {
        text:"SMTP",
        correct:true,
      },
      {
        text:"FTP",
        correct:false,
      },
      {
        text:"HTTP",
        correct:false,
      },
      {
        text:"UDP",
        correct:false,
      }
    ]
   },


   {
    id:4,
    question :"Which of the following is an example of a high-level programming language?",
    answers:[
      {
        text:"Assembly language",
        correct:false,
      },
      {
        text:"Machine language",
        correct:false,
      },
      {
        text:" C",
        correct:true,
      },
      {
        text:"Binary code",
        correct:false,
      }
    ]
   },


   {
    id:5,
    question :"Which of the following is NOT an example of a network topology?",
    answers:[
      {
        text:"Star",
        correct:false,
      },
      {
        text:"Bus",
        correct:false,
      },
      {
        text:"Tree",
        correct:false,
      },
      {
        text:"Loop",
        correct:true,
      }
    ]
   },

   {
    id:6,
    question :"What does the acronym SQL stand for?",
    answers:[
      {
        text:" Structured Query Language",
        correct:true,
      },
      {
        text:"Standard Query Language",
        correct:false,
      },
      {
        text:"Sequential Query Language",
        correct:false,
      },
      {
        text:"Simple Query Language",
        correct:false,
      }
    ]
   },


   {
    id:7,
    question :"What is the function of a compiler in the software development process?",
    answers:[
      {
        text:"Provides a user interface for code editing",
        correct:false,
      },
      {
        text:"Executes the code line by line",
        correct:false,
      },
      {
        text:"Optimizes the code for better performance",
        correct:false,
      },
      {
        text:" Converts high-level code into machine code",
        correct:true,
      }
    ]
   },
    

   {
    id:8,
    question :"Which of the following is NOT a fundamental principle of object-oriented programming (OOP)?",
    answers:[
      {
        text:"Linearity",
        correct:true,
      },
      {
        text:"Abstraction",
        correct:false,
      },
      {
        text:" Encapsulation",
        correct:false,
      },
      {
        text:"Inheritance",
        correct:false,
      }
    ]
   },

   {
    id:9,
    question :"Which of the following is an example of a non-volatile memory?",
    answers:[
      {
        text:"RAM",
        correct:false,
      },
      {
        text:"Cache",
        correct:false,
      },
      {
        text:" SSD",
        correct:true,
      },
      {
        text:"Register",
        correct:false,
      }
    ]
   },

   {
    id:10,
    question :"What is the role of a router in a computer network?",
    answers:[
      {
        text:"Transmits data within a local network",
        correct:false,
      },
      {
        text:"Connects multiple networks together",
        correct:true,
      },
      {
        text:"Stores and retrieves data from remote servers",
        correct:false,
      },
      {
        text:"Filters incoming and outgoing network traffic",
        correct:false,
      }
    ]
   },

   {
    id:11,
    question :"Which of the following is a popular version control system used in software development?",
    answers:[
      {
        text:"Subversion (SVN)",
        correct:true,
      },
      {
        text:"Docker",
        correct:false,
      },
      {
        text:"Jenkins",
        correct:false,
      },
      {
        text:"Apache Hadoop",
        correct:false,
      }
    ]
   },

   {
    id:12,
    question :"Which of the following is an example of a symmetric encryption algorithm?",
    answers:[
      {
        text:"RSA",
        correct:false,
      },
      {
        text:"AES",
        correct:true,
      },
      {
        text:"Diffie-Hellman",
        correct:false,
      },
      {
        text:"SHA-256",
        correct:false,
      }
    ]
   },

   {
    id:13,
    question :"What is the purpose of a DNS (Domain Name System)?",
    answers:[
      {
        text:"To encrypt internet traffic",
        correct:false,
      },
      {
        text:"To secure email communication",
        correct:false,
      },
      {
        text:"To manage database systems",
        correct:false,
      },
      {
        text:"To translate domain names into IP addresses",
        correct:true,
      }
    ]
   },

   {
    id:14,
    question :"Which of the following is an example of a cloud computing service model?",
    answers:[
      {
        text:"Platform as a Service (PaaS)",
        correct:true,
      },
      {
        text:"Virtual Private Network (VPN)",
        correct:false,
      },
      {
        text:"Network Attached Storage (NAS)",
        correct:false,
      },
      {
        text:"Wireless Fidelity (Wi-Fi)",
        correct:false,
      }
    ]
   },

   {
    id:15,
    question :"Which of the following is a widely used relational database management system (RDBMS)?",
    answers:[
      {
        text:" MongoDB",
        correct:false,
      },
      {
        text:"Redis",
        correct:false,
      },
      {
        text:"Apache Hadoop",
        correct:false,
      },
      {
        text:" SQLite",
        correct:true,
      }
    ]
   },
 
  ]

  const moneyPyramid = [
    {id:1,amount:" Rs. 1000"},
    {id:2,amount:" Rs. 2000"},
    {id:3,amount:" Rs. 5000"},
    {id:4,amount:" Rs. 10000"},
    {id:5,amount:" Rs. 20000"},
    {id:6,amount:" Rs. 30000"},
    {id:7,amount:" Rs. 40000"},
    {id:8,amount:" Rs. 50000"},
    {id:9,amount:" Rs. 75000"},
    {id:10,amount:" Rs. 100000"},
    {id:11,amount:" Rs. 200000"},
    {id:12,amount:" Rs. 300000"},
    {id:13,amount:" Rs. 500000"},
    {id:14,amount:" Rs. 1000000"},
    {id:15,amount:" Rs. 2000000"},
    
   ].reverse();

   

  useEffect(()=>{
    questionNumber > 1 && 
    setEarned(moneyPyramid.find((m)=> m.id === questionNumber - 1).amount);
  },[moneyPyramid,questionNumber]);



  useEffect(() => {
    if (questionNumber > 15) {
      setStop(true);
      {stop && questionNumber > 15 && (
        <h1 className="endText"> Congratulation You Win {earned}</h1>
      )}
    }
  }, [questionNumber]);

  return (
    <div className="app">
      <div className="main">
        {stop ? (
        <h1 className="endText">You Earned: {earned}</h1>
         ):(

          <>
        <div className="top">
          <div className="timer">
            {/* <Timer /> */}
            </div>
        </div>


        <div className="bottom">
         <Q 
         data={data} 
         setStop={setStop} 
          questionNumber={questionNumber}
         setQuestionNumber={setQuestionNumber}
         />
        </div>
        
        </>
        )}

      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (

               <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
               <span className="moneyListItemNumber">{m.id}</span>
               <span className="moneyListItemAmount">{m.amount}</span>
              </li>

          ))}
        
          {/* <li className="moneyListItem">
            <span className="moneyListItemNumber">1</span>
            <span className="moneyListItemAmount">1000</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">1</span>
            <span className="moneyListItemAmount">1000</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">1</span>
            <span className="moneyListItemAmount">1000</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListItemNumber">1</span>
            <span className="moneyListItemAmount">1000</span>
          </li> */}
        
        </ul>
      </div>
      
    </div>
  );
}






export default App;
