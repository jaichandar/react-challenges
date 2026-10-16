export const getAllTodos = async () => {
    await sleep();
    return fetch('http://localhost:3000/todo').then((res) => res.json());
}

export const getTodoById = async (id: string) => {
    await sleep();
    return fetch(`http://localhost:3000/todo/${id}`).then((res) => res.json());
}

export const createTodo = async (payload: any) => {
    await sleep();
    return fetch('http://localhost:3000/todo', 
        { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }
    ).then((res) => res.json());
}

export const updateTodo = async (id: string, payload: any) => {
    await sleep();
    return fetch(`http://localhost:3000/todo/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(payload)
    }).then((res) => res.json());
}

export const deleteTodo = async (id: string) => {
    await sleep();
    return fetch(`http://localhost:3000/todo/${id}`, { method: 'DELETE' }).then((res) => res.json());
}


const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('');
        }, 1000)
    })
}