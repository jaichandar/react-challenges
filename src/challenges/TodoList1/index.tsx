import Provider from './TodoContext';
import TodoInput from './TodoInput';
import TList from './TodoList';

const TodoList = () => {
    return (
        <div>
            <TodoInput />
            <TList />
        </div>
    )
}



const Parent = () => {
    return (
        <Provider>
            <TodoList />
        </Provider>
    )
}

export default Parent;