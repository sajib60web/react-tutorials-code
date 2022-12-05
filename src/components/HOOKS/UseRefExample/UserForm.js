import React, { useRef } from 'react'

const UserForm = () => {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;
        userNameRef.current.style.color = "red";
        passwordRef.current.style.color = "red";
        // form empty
        // userNameRef.current.value = "";
        // passwordRef.current.value = "";
        console.log({ userName, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">UserName: </label>
                <input type="text" id="userName" ref={userNameRef} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" ref={passwordRef} />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default UserForm