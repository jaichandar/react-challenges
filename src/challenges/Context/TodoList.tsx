import { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
    const context = useContext(TodoContext);
    const { todo, setTodo } = context as any;

    return (
        <div>
            <input 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
        </div>
    )
}

export default TodoList;