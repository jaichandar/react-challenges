import { useContext } from "react";
import { TodoContext } from './TodoContext';

const TodoList = () => {
    const { todo, setTodo, setList, list } = useContext(TodoContext) as any
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const payload = {
            id: crypto.randomUUID(),
            todo,
            isCompleted: false,
        }
        setList((prev: any) => ([
            ...prev,
            payload,
        ]))
        setTodo('');
    }

    return (
        <div>
            <p>TodoList</p>
            <form style={{ border: '1px solid red' }} onSubmit={handleSubmit}>
                <input 
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Enter Todo"
                />
                <button type="submit">Submit</button>
            </form>
            <div style={{ border: '1px solid green', width: '250px' }}>
                {
                    list.length ? list.map((val: any) => {
                        return (
                            <div key={val.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className="mb-0">{val.todo}</p>
                                <p className="mb-0">{val.isCompleted ? 'Done' : 'In-progress'}</p>
                            </div>
                        )
                    }) : null
                }
            </div>
        </div>
    )
}

export default TodoList;