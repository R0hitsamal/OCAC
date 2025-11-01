import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="container">
            <h1>Counter App</h1>
            <div className="box">
                <button className="btn" onClick={() => setCount(count => count - 1)}>-</button>
                <span className="Value">{count}</span>
                <button className="btn" onClick={() => setCount(count => count + 1)}>+</button>
            </div>
            <button onClick={() => setCount(count => count=0)} className="reset">Reset</button>
        </div>
    )
}

export default Counter