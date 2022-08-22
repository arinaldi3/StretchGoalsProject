import React, { useEffect, useState } from 'react';

function CreateStudent() {
    const [state, setState] = useState({
        name: '', 
        address: '',
        phone_number: '',
        username: '',
        email: '', 
        password: '',
    })

    const handleSubmit = async event => {
        event.preventDefault();
        const data = state;

        const studentUrl = 'http://localhost:8100/api/students/'
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const studentResponse = await fetch(studentUrl, fetchConfig)
        if (studentResponse.ok) {
            setState({
                name: '',
                address: '',
                phone_number: '',
                username: '',
                email: '', 
                password: '',
            })
        }
    }
        const handleChange = event => {
            const value = event.target.value;
            setState({
                ...state,
                [event.target.name]: value
            })
        }

    return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4" id="to-form">
            <h1>Student Sign Up</h1>
            <form onSubmit={handleSubmit} id="create-student-form">
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.name}placeholder="Student Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name" >Student Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.address}placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.phone_number}placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" />
                <label htmlFor="phone_number">Phone Number</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.username}placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                <label htmlFor="phone_number">Username</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.email}placeholder="Email" required type="text" name="email" id="email" className="form-control" />
                <label htmlFor="phone_number">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.password}placeholder="Password" required type="password" name="password" id="password" className="form-control" />
                <label htmlFor="phone_number">Password</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    )
}

export default CreateStudent;

