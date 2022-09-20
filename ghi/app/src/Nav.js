import { NavLink, Link } from 'react-router-dom';
import { AuthProvider, useToken, AuthContext, getToken, useAuthContext } from './Authentication';
import React, { useEffect, useState, useContext} from 'react';
import BackGround from './Background';
import {CgProfile} from 'react-icons/cg'

function Nav() {
  const [x, login, logout] = useToken();
  const [instructors, setInstructors] = useState([]);
  const [students, setStudents] = useState([])
  const [item, setItem] = useState();

  const { token } = useAuthContext(); 
  
  async function fetchStudentUser() {
    let classData = await fetch(`http://localhost:8100/api/students/`);
    let data = await classData.json();
    setStudents(data.students);
}

  async function fetchInstructorUser() {
    let instructorData = await fetch('http://localhost:8100/api/instructors/');
    let theData = await instructorData.json();
    setInstructors(theData.instructors);
  }

useEffect(() => {
    const item = JSON.parse(localStorage.getItem('key'));
    if (item) {
    setItem(item);
    fetchInstructorUser();
    fetchStudentUser();
    }
}, []); 

useEffect(() => {
  const itemString = localStorage.getItem("key");
  if (itemString) {
    const item = JSON.parse(itemString);
    setItem(item);
  }
  function storageEventHandler(event) {
    if (event.key === "key") {
      const item = JSON.parse(event.newValue);
      setItem(item);
    }
  }
  window.addEventListener("storage", storageEventHandler);
  return () => {
      window.removeEventListener("storage", storageEventHandler);
  };
}, []);

const isStudent = (() => {
  for (const student of students) {
    if (student.username === item) {
      return(
        <>
    
            <NavLink className="nav-link" aria-current="page" to="/list/classes">List of Classes</NavLink>
      
            <NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink>
          <div className='d-flex justify-content-between text-white align-items-center'>
            <NavLink className="nav-link px-4" aria-current="page" to="/portal/student"> <CgProfile size='30'/> </NavLink>
            <button onClick={logout} className="btn btn-primary">Logout</button>
            </div>
        </>  
      )
    } else {
      continue 
    }
  }
})

const isInstructor = (() => {
  for (const instructor of instructors) {
    if (instructor.username === item) {
      return(
        <>
            <NavLink className="nav-link" aria-current="page" to="/new/class">Create a Class</NavLink>
            <NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink>

            <div className='d-flex justify-content-between text-white align-items-center'>
            <NavLink className="nav-link px-4" aria-current="page" to="/portal/instructor" ><CgProfile size='30'/></NavLink>
            <button onClick={logout} className="btn btn-primary">Logout</button>
            </div>
        </>
      )
    } else {
      continue 
    }
  }
})

  return (
    <>
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div>
      <div className="d-flex justify-content-between">
        <NavLink className="navbar-brand" to="/">Stretch Goals</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          { token ?
          <>
          <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/list/instructors">Meet the Instructors</Link>
          </li>

          {isStudent()}
          {isInstructor()}
          <li>
            <button onClick={logout} className="btn btn-primary">Logout</button>
          </li>
          </> 
          :
          <>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">Sign up</a>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/new/student">Sign up as a student</NavLink></li>
              <li><NavLink className="dropdown-item" to="/new/instructor">Sign up as an instructor</NavLink></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink>
          </li>
          </>
        }
          </ul>
        </div>
        </div>
      </div>
    </nav> */}
    <nav className="py-2" id='apple'>
      <div className='d-flex justify-content-around text-white align-items-center'>
        <NavLink to='/' className='navbar-brand fw-bold fs-2'>
          Stretch Goals
        </NavLink>
        { token ?
        <>
        <NavLink to='/list/instructors' className='navbar-brand'>
          Meet the Instructors
        </NavLink>
        {isStudent()}
        {isInstructor()}
        {/* <button onClick={logout} className="btn btn-primary">Logout</button> */}
        </>
        :
        <>
          <NavLink className="navbar-brand" to="/new/student">Sign up as a student</NavLink>
          <NavLink className="navbar-brand" to="/new/instructor">Sign up as an instructor</NavLink>
          <NavLink className="navbar-brand" aria-current="page" to="/about">About Us</NavLink>
          <NavLink className="btn btn-primary" aria-current="page" to="/login">Login</NavLink>
          </>
      }
    
      
      </div>
    </nav>
    </>
    
  )
}

export default Nav;
