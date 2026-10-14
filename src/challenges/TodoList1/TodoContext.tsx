import { createContext, useState } from 'react';

export const TodoContext = createContext(null);

const TodoContextProvider = ({ children }: any) => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    return (
        <TodoContext.Provider value={{ todo, setTodo, todoList, setTodoList } as any}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;