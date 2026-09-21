import { useState } from 'react';
import { toast } from 'react-toastify';
import TodoInput from './TodoInput';
import Lists from './Lists';

const TodoList = () => {
    const [todo, setTodo] = useState<string>('');
    const [lists, setLists] = useState<{ id: string, todo: string, completed: boolean }[]>([]);
    const [editId, setEditId] = useState('');

    const checkAlreadyExist = (list: any[], todo: string): boolean => {
        const isExist = list.filter((val) => val.todo === todo);
        return Boolean(isExist.length);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const payload = {
            id: crypto.randomUUID(),
            todo,
            completed: false,
        }

        if (checkAlreadyExist(lists, todo)) {
            toast.error("Todo Already Exist");
            return;
        }
        if (editId) {
            setLists((prev) => {
                return prev.map((val) => {
                    if (val.id === editId) {
                        return {
                            id: editId,
                            todo: todo,
                            completed: val.completed,
                        }
                    } else return val;
                })
            })
            setEditId('');
        } else {
            setLists((prev) => ([
                ...prev,
                payload,
            ]));
        }
        setTodo('');
    }

    const toUpperCase = (val: string) => {
        if (!val.length) {
            return ''
        } else {
            const char = val.slice(0, 1).toUpperCase() + val.slice(1);
            return char;
        }
    }

    const handleEdit = (id: string) => {
        const _todo = lists.find((val) => val.id === id);
        if (_todo?.todo) {
            setTodo(_todo.todo);
            setEditId(id);
        }
    }

    const handleDone = (id: string) => {
        const index = lists.findIndex((val) => val.id === id);
        const modifiedTodo = lists.map((val, i) => {
            if (i === index) {
                return {
                    ...val,
                    completed: !val.completed
                }
            } else return val;
        })
        setLists(modifiedTodo);
    }

    return (
        <div>
            <p style={{ textAlign: 'center' }}>TodoList</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <TodoInput 
                        label='Todo'
                        placeholder='Enter Todo...'
                        todo={todo}
                        setTodo={setTodo}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <hr />
            <div>
                <p>Todo-List</p>
                {
                    lists.length ? lists.map((val) => {
                        return (
                            <Lists 
                                key={val.id}
                                val={val}
                                handleDone={handleDone}
                                handleEdit={handleEdit}
                                toUpperCase={toUpperCase}
                            />
                        ) 
                    }) : null
                }
            </div>
        </div>
    )
}

export default TodoList;