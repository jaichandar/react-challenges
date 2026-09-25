import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

type todoList = {
    id: string,
    todo: string,
    isCompleted: boolean
}

const WebWorkers = () => {

    const [inputValue, setInputValue] = useState(0);
    const [result, setResult] = useState(0);
    const [todo, setTodo] = useState('');
    const [list, setList] = useState<todoList[]>([]);
    const workerRef = useRef<Worker | null>(null);

    const handleCalculate = () => {
        try {
            workerRef.current?.postMessage({ inputValue });
        } catch (err: any) {
            toast.error(err.message || 'Something Went Wrong');
        }
    }

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        const payload: todoList = {
            id: crypto.randomUUID(),
            todo,
            isCompleted: false,
        }
        setList((prev) => ([...prev, payload]));
        setTodo('');
    }

    useEffect(() => {
        workerRef.current = new Worker(new URL('./Worker.ts', import.meta.url), { type: 'module' });

        workerRef.current.onmessage = (event) => {
            setResult(event.data);
            setInputValue(0);
        }

        return () => {
            if (workerRef.current) {
                workerRef.current?.terminate();
            }
        }
    }, []);

    return (
        <div>
            <div style={{ border: '1px solid red', padding: '10px' }}>
                <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                    placeholder="Enter Value"
                />
                <p>Heavy Computation: {result}</p>
                <button onClick={handleCalculate}>Calculate</button>
            </div>
            <div style={{ border: '1px solid green', padding: '10px' }}>
                <form onSubmit={handleOnSubmit}>
                    <input 
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
                {
                    list.length ? (
                        list.map((val) => (
                            <div key={val.id} style={{ width: '250px', border: '1px solid blue', display: 'flex', justifyContent: 'space-between' }}>
                                <p className="mb-0">{val.todo}</p>
                                <p className="mb-0">{val.isCompleted ? 'Completed': "in-complete"}</p>
                            </div>
                        ))
                    ) : null
                }
            </div>
        </div>
    )
}

export default WebWorkers;