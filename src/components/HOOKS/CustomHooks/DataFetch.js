import React from 'react'
import useFetch from './useFetch';

const DataFetch = () => {
    const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
    const loadingMessage = <p>Todos is loading</p>;
    const errorMessage = <p>{error}</p>;

    const todosElement = data && data.map((todo) => {
        return <p key={todo.id}> {todo.title} </p>;
    });

    return (
        <div style={{ margin: '20px', }}>
            <h1>Todos</h1>
            {error && errorMessage}
            {isLoading && loadingMessage}
            {todosElement}
        </div>
    )
}

export default DataFetch