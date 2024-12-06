import { useState, useEffect, useRef } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date(Date.now()));
    const interval = useRef(1000); // interval in ms

    function step() {
        let newTime = new Date(Date.now());
        let realInterval = newTime.valueOf() - time.valueOf();
        let msDeviated = realInterval - interval; // calculates in ms the deviation of the passed time from the expected time
        setTime(newTime);
        setTimeout(step, interval + msDeviated);
    }

    useEffect( () => {
        setTimeout(step, interval);
    }, []);

    return (
        <h2>{time.getHours().toString().padStart(2, 0)}:{time.getMinutes().toString().padStart(2, 0)}.{time.getSeconds().toString().padStart(2, 0)}</h2>
    );
}

export default Clock;

/* Clock Algorithm
    // Setup
    time = getTime()
    

*/