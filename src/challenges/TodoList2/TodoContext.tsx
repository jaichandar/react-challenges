import { createContext, useState } from 'react';

export const TodoContext = createContext(null);

const TodoProvider = ({ children }: any) => {

    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);

    return (
        <TodoContext.Provider value={{ todo, setTodo, list, setList }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;