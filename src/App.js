import logo from './logo.svg';
import './App.css';
import  "./app1.css";
import { useState } from 'react';
import Q from './components/Q';


function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const moneyPyramid =[
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
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>


        <div className="bottom">
         <Q/>
        </div>

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
