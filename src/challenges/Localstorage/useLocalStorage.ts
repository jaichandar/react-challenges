import { useState, useEffect } from 'react';

export const useLocalStorage = (name: string) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const valueFromLocalStorage = localStorage.getItem(name);
            if (valueFromLocalStorage) {
                setValue(valueFromLocalStorage);
            }
        }
    }, [])

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        localStorage.setItem(name, e.target.value);
    }

    return { value, handleOnChange };
}

