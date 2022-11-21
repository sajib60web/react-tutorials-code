import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
    {
        id: uuidv4(),
        title: "Molecule Man",
        description: "Dan Jukes",
    },
    {
        id: uuidv4(),
        title: "Jane",
        description: "Jane Wilson",
    },
    {
        id: uuidv4(),
        title: "Uppercut",
        description: "Jane Wilson",
    },
    {
        id: uuidv4(),
        title: "Carey Norton",
        description: "Hello, Marianne Caldwell! You have 7 unread messages.",
    },
    {
        id: uuidv4(),
        title: "Alison Knight",
        description: "strawberry 7 unread messages.",
    },
    {
        id: uuidv4(),
        title: "Marylou Davidson",
        description: "Marylou Davidson unread messages.",
    },
];

const List = () => {
    return (
        <div>
            {todos.map((todo) => {
                const { id, title, description } = todo;
                return (
                    <div key={id}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
