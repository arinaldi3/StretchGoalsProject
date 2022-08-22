// import React, { useState } from 'react';

// function Login() {
//     const [state, setState] = useState({
//         username: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         const {id , value} = e.target   
//         setState(prevState => ({
//             ...prevState,
//             [id] : value
//         }))

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         Userfront.login({
//             method: "password",
//             username: this.state.username,
//             password: this.state.password,
//         });
//         }
    
//     }
//     return (
//         <div className="row">
//         <div className="offset-3 col-6">
//         <div className="shadow p-4 mt-4" id="to-form">
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit} id="login-form">
//             <div className="form-floating mb-3">
//                 <input onChange={handleChange} value = {state.username}placeholder="Username" required type="text" name="username" id="username" className="form-control" />
//                 <label htmlFor="name" >Username</label>
//             </div>
//             <div className="form-floating mb-3">
//                 <input onChange={handleChange} value = {state.password}placeholder="Password" required type="password" name="password" id="password" className="form-control" />
//                 <label htmlFor="address">Password</label>
//             </div>
//             <button className="btn btn-primary">Login</button>
//             </form>
//         </div>
//         </div>
//     </div>
//     )
// }

// export default Login;