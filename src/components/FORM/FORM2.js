import React, { useState } from 'react'
import './style.css'

export default function FORM2() {
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const { name, email, password } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (e) => {
        console.log('form is submitted');
        console.log(user);
        e.preventDefault();
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className='form_group'>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name="name" value={name} id="name" onChange={handleChange} required />
                </div>
                <div className='form_group'>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" value={email} id="email" onChange={handleChange} required />
                </div>
                <div className='form_group'>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" value={password} id="password" onChange={handleChange} required />
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}
