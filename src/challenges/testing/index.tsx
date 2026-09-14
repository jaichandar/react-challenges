import { useState } from 'react';

const Testing = () => {

    const [startTime, setStartTime] = useState(Date.now());
    const [message, setMessage] = useState('');

    const handleStart = () => {
        setStartTime(Date.now());
    }

    const handleEnd = () => {
        const end = Date.now();
        const reaction = end - startTime;
        setMessage(`You Reaction Time is ${reaction} ms`);
    }

    return (
        <div>
            <button onClick={handleStart}>Start Time</button>
            <button onClick={handleEnd}>End Time</button>
            <p>{message}</p>
        </div>
    )
}

export default Testing;