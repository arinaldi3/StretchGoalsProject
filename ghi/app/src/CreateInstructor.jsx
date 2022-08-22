import React, { useEffect, useState } from 'react';

function CreateInstructor() {
    const [state, setState] = useState({
        name: '', 
        address: '',
        phone_number: '',
        username: '',
        email: '', 
        password: '',
        certification: '',
        yoga_studio: '',
        // demo: '',
        instagram: '',
    })

    const handleSubmit = async event => {
        event.preventDefault();
        const data = state;

        const instructorUrl = 'http://localhost:8100/api/instructors/'
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const instructorResponse = await fetch(instructorUrl, fetchConfig)
        if (instructorResponse.ok) {
            setState({
                name: '', 
                address: '',
                phone_number: '',
                username: '',
                email: '', 
                password: '',
                certification: '',
                yoga_studio: '',
                // demo: '',
                instagram: '',
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
            <h1>Instructor Sign Up</h1>
            <form onSubmit={handleSubmit} id="create-instructor-form">
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.name}placeholder="Instructor Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name" >Instructor Name</label>
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
                <input onChange={handleChange} value = {state.certification}placeholder="Certification" required type="text" name="certification" id="certification" className="form-control" />
                <label htmlFor="certification">Certification (optional) </label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.yoga_studio}placeholder="Yoga Studio" type="text" name="yoga_studio" id="yoga_studio" className="form-control" />
                <label htmlFor="yoga_studio">Yoga Studio (optional)</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.instagram}placeholder="Instagram Handle" type="text" name="instagram" id="instagram" className="form-control" />
                <label htmlFor="instagram">Instagram Handle (optional)</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    )
}

export default CreateInstructor;