import React, { useState } from 'react';

function CreateInstructor() {
    const [instructor, setInstructor] = useState({
        first_name: '',
        last_name: '',
        address: '',
        phone_number: '',
        username: '',
        email: '',
        password: '',
        certification: '',
        yoga_studio: '',
        demo: '',
        instagram: '',
        profile_picture: '',
    })
    const handleSubmit = async event => {
        event.preventDefault();
        const data = instructor;
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
            setInstructor({
                first_name: '',
                last_name: '',
                address: '',
                phone_number: '',
                username: '',
                email: '',
                password: '',
                certification: '',
                yoga_studio: '',
                demo: '',
                instagram: '',
                profile_picture: '',
            })
        }
    }
        const handleChange = event => {
            const value = event.target.value;
            setInstructor({
                ...instructor,
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
                <input onChange={handleChange} value = {instructor.first_name}placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                <label htmlFor="name">First Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.last_name}placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                <label htmlFor="name">Last Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.address}placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.phone_number}placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" />
                <label htmlFor="phone_number">Phone Number</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.username}placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                <label htmlFor="user_name">Username</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.email}placeholder="Email" required type="text" name="email" id="email" className="form-control" />
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.password}placeholder="Password" required type="password" name="password" id="password" className="form-control" />
                <label htmlFor="password">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.certification}placeholder="Certification" type="text" name="certification" id="certification" className="form-control" />
                <label htmlFor="certification">Certification (optional) </label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.yoga_studio}placeholder="Yoga Studio" type="text" name="yoga_studio" id="yoga_studio" className="form-control" />
                <label htmlFor="yoga_studio">Yoga Studio (optional)</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.demo}placeholder="Demo" type="text" name="demo" id="demo" className="form-control" />
                <label htmlFor="demo">Demo Video</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.instagram}placeholder="Instagram Handle" type="text" name="instagram" id="instagram" className="form-control" />
                <label htmlFor="instagram">Instagram Handle (optional)</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {instructor.profile_picture}placeholder="Profile Picture" type="text" name="profile_picture" id="profile_picture" className="form-control" />
                <label htmlFor="profile_picture">Profile Picture (two words)</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    )
}
export default CreateInstructor;