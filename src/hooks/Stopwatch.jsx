import React, { useState, useRef } from 'react'

export const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const timerRef = useRef(0);

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            console.log("updating time");
            setTime((prevTime) => prevTime+1)
        }, 1000);
        console.log("intervalId", timerRef.current);
    }

    const stopTimer = () => {
        console.log("clearing", timerRef.current);
        clearInterval(timerRef.current);
    }
    
  return (
    <div>
        <div>Time in Sec: {time}</div>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
    </div>
  )
}


// let -->  persistence(no), rerender(no)
// useRef --> persistence(yes) rerender(no)
// useState --> persistence(yes) rerender(yes)