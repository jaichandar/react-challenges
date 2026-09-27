import { createContext, useState, type ReactNode } from "react";

type TodoContextType = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
};

type TodoProviderProps = {
    children: ReactNode;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todo, setTodo] = useState("");

    return (
        <TodoContext.Provider value={{ todo, setTodo }}>
            {children}
        </TodoContext.Provider>
    );
};