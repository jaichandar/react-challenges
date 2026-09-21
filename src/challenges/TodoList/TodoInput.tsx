const TodoInput = (props: { placeholder: string, label: string, todo: string, setTodo: React.Dispatch<React.SetStateAction<string>> }) => {
    const { placeholder, label, todo, setTodo } = props;
    return (
        <>
            <span>{label}: </span>
            <input
                placeholder={placeholder}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
        </>
    )
}

export default TodoInput;