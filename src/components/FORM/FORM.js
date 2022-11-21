import React, {useState} from 'react'
import './style.css'

export default function FORM() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        let userInfo = {
            name : name,
            email : email,
            password : password
        }
        console.log(userInfo);
        e.preventDefault()
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className='form_group'>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" name="name" value={name} id="name" onChange={handleNameChange} required />
                </div>
                <div className='form_group'>
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" name="email" value={email} id="email" onChange={handleEmailChange} required />
                </div>
                <div className='form_group'>
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" name="password" value={password} id="password" onChange={handlePasswordChange} required />
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}
