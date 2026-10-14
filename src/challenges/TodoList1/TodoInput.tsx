import { useContext } from "react"
import { TodoContext } from "./TodoContext"

const TodoInput = () => {
    const { todo, setTodo, setTodoList }: any = useContext(TodoContext);

    const handleSubmit = () => {
        const payload = {
            id: crypto.randomUUID(),
            todo,
            isCompleted: false,
        }

        setTodoList((prev: any) => ([
            ...prev,
            payload,
        ]))
        setTodo('');
    }

    console.log(todo)

    return (
        <div>
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter Todo'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default TodoInput;