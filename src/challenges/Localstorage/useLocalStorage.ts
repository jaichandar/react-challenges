import { useState } from 'react';

export const useLocalStorage = (name: string) => {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(name);
    })

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        localStorage.setItem(name, e.target.value);
    }

    return { value, handleOnChange };
}

