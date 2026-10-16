import './crud.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Oval } from 'react-loader-spinner';
import { createTodo } from './api';
import { updateTodo } from './api';

const TodoInput = (props: { todo: string, selectedTodo: string }) => {
    const { selectedTodo } = props;
    const [todo, setTodo] = useState('');
    const queryClient = useQueryClient();

    const { isError, isPending, mutate: createMutate, error: createError } = useMutation({
        mutationFn: (payload: { todo: string }) => createTodo(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["Todolist"],
            })
        }
    })

    const { mutate: updateMutate, isPending: updatePending } = useMutation({
        mutationFn: (payload: { id: string,  payload: { todo: string } }) => updateTodo(payload.id, payload.payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['Todolist'],
            })
        }
    })

    useEffect(() => {
        if (props.todo) {
            setTodo(props.todo);
        }
    }, [props.todo]);

    const handleSubmit = () => {
        if (!todo) {
            toast.error('Please Enter Todo');
            return;
        }

        if (props.todo) {
            updateMutate({ id: selectedTodo, payload: { todo } });
            setTodo('')
            toast.success('Todo Updated Successfully');
        } else {
            const payload = { todo };
            createMutate(payload);
            setTodo('');
            toast.success("Todo Created Successfully");
        }
    }

    return (
        <div>
            <span>Todo: </span>
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter Todo'
            />
            <button onClick={handleSubmit} disabled={isPending || updatePending}>
                <div>
                    {isPending || updatePending ? <Oval height={20} width={20} /> : null}
                    {isPending || updatePending ? null : props.todo ? 'Update' : "Submit"}
                </div>
            </button>
            {isError && <p>{createError.toString()}</p>}
        </div>
    )
}

export default TodoInput;