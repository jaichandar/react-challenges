import { memo } from 'react';

type listProps = {
    val: { id: string, todo: string, completed: boolean },
    toUpperCase: (val: string) => string;
    handleEdit: (val: string) => void;
    handleDone: (val: string) => void;
}

const Lists = memo((props: listProps) => {
    console.log('list');
    const { val, toUpperCase, handleDone, handleEdit } = props;
    return (
        <div style={{ display: 'flex', gap: '10px', padding: '10px', border: '1px solid red', alignItems: 'center' }}>
            <p>{toUpperCase(val.todo)}</p>
            <p>{val.completed ? 'Completed' : 'Pending'}</p>
            <button onClick={() => handleEdit(val.id)}>Edit</button>
            <button onClick={() => handleDone(val.id)}>Done</button>
        </div>
    )
})

export default Lists;

