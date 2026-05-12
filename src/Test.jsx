import React from 'react'
import { useState } from 'react'
import './Test.css'

function Test() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted successfully! Name: ${name}, Email: ${email}, Phone: ${phone}, Password: ${password}`);
    console.log('Form Data:', { name, email, phone, password });
    // Handle form submission logic here
  }

  return (
    <div className='form-container'>
        <h1>Student Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <label>Name:</label>
                <input 
                    type="text" 
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='input-group'>
                <label>Email:</label>
                <input 
                    type="email" 
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='input-group'>
                <label>Phone:</label>
                <input 
                    type="tel" 
                    placeholder='Enter your phone number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className='input-group'>
                <label>Password:</label>
                <input 
                    type="password" 
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">
                <div className='Button'>Register</div>
            </button>
        </form>
    </div>
  )
}

export default Test