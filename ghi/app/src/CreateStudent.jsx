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
        <div className="form-row">
        {/* <div className="offset-3 col-6"> */}
        <div className="shadow p-4 mt-4" id="to-form">
            <h1>Student Sign Up</h1>
            {/* <form onSubmit={handleSubmit} id="create-student-form">
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
            </form> */}
            <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="first_name">First Name</label>
      <input onChange={handleChange} value = {state.first_name} required type="text" class="form-control" id="first_name" placeholder="First Name">
    </div>
    <div class="form-group col-md-6">
      <label for="first_name">Last Name</label>
      <input type="text" class="form-control" id="last_name" placeholder="Last Name">
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
        </div>
        </div>
    </div>
    )
}

export default CreateStudent;

