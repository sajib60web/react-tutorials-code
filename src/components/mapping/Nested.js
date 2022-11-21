import React from "react";

const users = [
    {
        fullName: "Molecule Man",
        age: 22,
        phones: [
            {
                home: "12345678",
                office: "56448785",
            },
        ],
    },
    {
        fullName: "Jane",
        age: 23,
        phones: [
            {
                home: "369258445",
                office: "56874521",
            },
        ],
    },
    {
        fullName: "Uppercut",
        age: 24,
        phones: [
            {
                home: "6547889",
                office: "2548741",
            },
        ],
    },
];

export default function Nested() {
    return (
        <div>
            <h1>Nested List</h1>
            {users.map((user, index) => (
                <article key={index}>
                    <h3>Full Name: {user.fullName}</h3>
                    <p>Age: {user.age}</p>
                    {user.phones.map((phone, index1) => (
                        <div key={index1}>
                            <p>Home {phone.home}</p>
                            <p>Office {phone.office}</p>
                        </div>
                    ))}
                </article>
            ))}
        </div>
    );
}
