import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Effects = () => {
    const paraRef = useRef(null);
    const [show, setShow] = useState(true);

    // useEffect(() => {
        
    // }, [show]);

    useLayoutEffect(() => {
        if (paraRef.current) {
            const height = 100;
            // paraRef.current.style.top = `${height}px`;
        }
    }, [show]);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Show</button>
            {
                show && <p ref={paraRef} style={{ position: 'absolute' }}>This is Model</p>
            }
        </div>
    )
}

export default Effects;