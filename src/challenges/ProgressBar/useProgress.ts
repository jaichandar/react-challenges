import { useEffect, useState } from 'react';

export const useProgress = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setWidth((prev) => {
                if (prev === 100) {
                    return 100;
                } else {
                    return prev + 1;
                }
            })
        }, 200);
    }, []);

    return { width };
}