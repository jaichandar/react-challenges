import { useCounter } from './useCounter';

const Parent = () => {
    const { increment, decrement, count } = useCounter();
    const { increment: _, decrement: __, count: ___ } = useCounter();
    return (
        <div>
            <p>Render Props</p>
            <div style={{ border: '1px solid red' }}>
                <p>{count}</p>
                <button onClick={() => increment()}>Increment</button>
                <button onClick={() => decrement()}>Decrement</button>
            </div>
            <div style={{ border: '1px solid green' }}>
                <p>{___}</p>
                <button onClick={() => _()}>Increment</button>
                <button onClick={() => __()}>Decrement</button>
            </div>
        </div>
    )
}

export default Parent;