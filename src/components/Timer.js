import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (time) =>
   {
    
    const seconds = time;
    return `${seconds.toString().padStart(2, '0')}`;
  };

  return <div className="timer">{formatTime(seconds)}</div>;
};

export default Timer;













