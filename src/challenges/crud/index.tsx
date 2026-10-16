import { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { getTodoById } from './api';
import TodoInput from './TodoInput';
import { TodoList } from './TodoList';
import { useQuery } from '@tanstack/react-query';

const Todo = () => {
    const [selectedTodo, setSelectedtodo] = useState('');

    const { data: todo, isLoading } = useQuery({
        queryKey: ['todo', selectedTodo],
        queryFn: () => getTodoById(selectedTodo),
    })

    if (isLoading) {
        return <Oval height={20} width={20} />
    }

    return (
        <div className='wrapper'>
            <TodoInput todo={todo.todo} selectedTodo={selectedTodo}/>
            <hr />
            <TodoList setSelectedtodo={setSelectedtodo} />
        </div>
    )
}

export default Todo;