import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        console.log('useEffect');
    }, []);

    return (
        <div style={{ margin: '20px', }}>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <button onClick={() => setIsLoading(!isLoading)}>is Loading</button>
        </div>
    )
}

export default UseEffectExample