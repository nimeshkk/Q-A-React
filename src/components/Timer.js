import React, { useRef, useEffect, useState } from "react";

export default function Countdown() {
  const [num, setNum] = useState(5);
  const [earned, setEarned] = useState(false);

  let intervalRef = useRef();

  const decreaseNum = () => {
    setNum((prev) => prev - 1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (num === 0) {
      setEarned(true);
    }
  }, [num]);

  return (
    <div>
      {earned ? (
        <div>Earned!</div>
      ) : (
        <div>
          <div>{num}</div>
        </div>
      )}
    </div>
  );
}




