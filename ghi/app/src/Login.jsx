import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from "./Authentication";

function Login({login}) {
    // const navigate = useNavigate();
    // const [token, login] = useToken();
    const [data, setData] = useState({
        username: '',
        password: '',
        error: '',
    });


    const handleSubmit = async (event) => {
        event.preventDefault();
        const error = await login(data.username, data.password);
        setData({error: error})
        setData({
            username: '',
            password: '',
        })

    }
    const handleChange = event => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]:value
        })}


    return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4" id="to-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} id="login-form">
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {data.username}placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                <label htmlFor="username" >Username</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {data.password}placeholder="Password" required type="password" name="password" id="password" className="form-control" />
                <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary">Login</button>
            </form>
        </div>
        </div>
    </div>
    )
}

export default Login;