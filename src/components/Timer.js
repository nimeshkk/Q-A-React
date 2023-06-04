import React, { useRef, useEffect, useState } from "react";

export default function Countdown() {
  const [num, setNum] = useState(5);
  
 
  
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  
  return (
    <div>
      <div>{num}</div>
      
    </div>
  );
}


