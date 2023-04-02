import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialSeconds }) {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSecondsRemaining(secondsRemaining => {
          if (secondsRemaining === 0) {
            setIsRunning(false);
          }
          return secondsRemaining - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartClick = () => {
    setIsRunning(true);
  };

  const handleStopClick = () => {
    setIsRunning(false);
  };

  return (
    <div>
     <center><h1> Timer</h1></center> 
      {isRunning ? (
        <h2>Time remaining: {secondsRemaining} seconds</h2>
      ) : (
        <h2>Timer stopped</h2>
      )}
      {secondsRemaining === 0 && <h2>Time is up!</h2>}
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
    </div>
  );
}

export default CountdownTimer;
