import { deleteTodo, getAllTodos } from './api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Oval } from 'react-loader-spinner';

export const TodoList = (props: { setSelectedtodo: (val: string) => void; }) => {
    const { setSelectedtodo } = props;
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['Todolist'],
        queryFn: () => getAllTodos(),
    })

    const { isPending, mutate } = useMutation({
        mutationFn: (id: string) => deleteTodo(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['Todolist'],
            })
        }
    })

    if (isLoading || isPending) {
        return <Oval height={20} width={20} />
    }

    if (isError) {
        return <p>{error.toString()}</p>
    }

    return (
        <div>
            <ul>
            {
                data.map((val: { id: string, todo: string }) => {
                    return (
                        <div key={val.id} className='d-flex gap-2' style={{ border: '1px solid black', padding: '5px' }}>
                            <li>{val.todo}</li>
                            <button onClick={() =>setSelectedtodo(val.id)}>Edit</button>
                            <button onClick={() => mutate(val.id)}>Delete</button>
                        </div>
                    )
                })
            }   
            </ul>    
        </div>
    )
}