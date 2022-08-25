import React, { useState } from 'react';

function CreateStudent() {
    const [state, setState] = useState({
        first_name: '', 
        last_name: '',
        address: '',
        phone_number: '',
        username: '',
        email: '', 
        password: '',
        profile_picture: '',
    })

    const handleSubmit = async event => {
        event.preventDefault();
        const data = state;

        const studentUrl = 'http://localhost:8100/api/students/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const studentResponse = await fetch(studentUrl, fetchConfig)
        if (studentResponse.ok) {
            setState({
                first_name: '',
                last_name: '',
                address: '',
                phone_number: '',
                username: '',
                email: '', 
                password: '',
                profile_picture: '',
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
                <input onChange={handleChange} value = {state.first_name}placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                <label htmlFor="name">First Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.last_name}placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                <label htmlFor="name">Last Name</label>
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
                <label htmlFor="user_name">Username</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.email}placeholder="Email" required type="text" name="email" id="email" className="form-control" />
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.password}placeholder="Password" required type="password" name="password" id="password" className="form-control" />
                <label htmlFor="password">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.profile_picture}placeholder="Password" type="text" name="profile_picture" id="profile_picture" className="form-control" />
                <label htmlFor="profile_picture">Profile Picture (two words)</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    )
}

export default CreateStudent;
