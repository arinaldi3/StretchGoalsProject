import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useToken } from './Authentication';
import Nav from './Nav';

function Login() {
    const navigate = useNavigate();
    const [,login] = useToken();
    const [data, setData] = useState({
<<<<<<< HEAD
        // username: '',
        // password: '',
=======
        username: '',
        password: '',
        error: '',
>>>>>>> 4103c34808e874c86ad11a7c16b07db68fc162fb
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(data.username, data.password);
        navigate('/');
    }


    const handleChange = event => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]:value
        })}


    return (
        <>
        <Nav/>
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4" id="to-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} id="login-form">
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {data.username} placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                <label htmlFor="username" >Username</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {data.password}placeholder="Password" required type="password" name="password" id="password" className="form-control" />
                <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary">Login <NavLink className='navbar-brand' to='/' /> </button>
            </form>
        </div>
        </div>
    </div>
    </>
    )
}

export default Login;