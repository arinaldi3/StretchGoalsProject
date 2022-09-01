import { NavLink } from 'react-router-dom';
import { AuthProvider, useToken } from './Authentication';
import React, { useState } from 'react';

function Nav() {
  const [token, login, logout] = useToken();
  // const [students, setStudents] = useState();
  const [instructors, setInstructors] = useState();



  const StudentNav = () => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="portal/student">My Profile</NavLink>
        </li>
    )
  }
  const InstructorNav = () => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="portal/instructor">Instructor Profile</NavLink>
        </li>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Stretch Goals</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            { token &&
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="list/instructors">Meet the Instructors</NavLink>
          </li>
          }
          { token &&
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="list/classes">List of Classes</NavLink>
          </li>}
          {token &&
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="new/class">Create a Class</NavLink>
          </li>}
          { !token &&
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">Sign up</a>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="new/student">Sign up as a student</NavLink></li>
              <li><NavLink className="dropdown-item" to="new/instructor">Sign up as an instructor</NavLink></li>
            </ul>
          </li>
          }
          { !token &&
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
          </li>}
          { token &&
          <li>
            <button onClick={logout} className="btn btn-primary">Logout</button>
          </li>}
          {token && 
          <StudentNav/>
          }
          
          {token &&
          <InstructorNav/>
          }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
