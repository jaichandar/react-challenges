import { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TList = () => {
    const { todoList }: any = useContext(TodoContext);

    return (
        <div>
            {
                todoList.length ? todoList.map((val: any) => (
                    <div key={val.id}>
                        <p>{val.todo}</p>
                    </div>
                )): null
            }
        </div>
    )
}

export default TList;