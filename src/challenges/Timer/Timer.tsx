import { useEffect, useState } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            return;
        }
        let intervalId = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, [isRunning]);

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleStart = () => {
        setIsRunning(true);
    }

    const handleReset = () => {
        setSeconds(0);
        setIsRunning(false);
    }

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:` + `${String(minutes).padStart(2, '0')}:` + `${String(remainingSeconds).padStart(2, '0')}` 

    return (
        <div>
            <p>{formattedTime}</p>
            <button onClick={() => handleStart()}>Start</button>
            <button onClick={() => handleStop()}>Stop</button>
            <button onClick={() => handleReset()}>Reset</button>        
        </div>
    )
}

export default Timer;