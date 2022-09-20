import { NavLink, Link } from 'react-router-dom';
import { AuthProvider, useToken, AuthContext, getToken, useAuthContext } from './Authentication';
import React, { useEffect, useState, useContext} from 'react';
import BackGround from './Background';

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
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/portal/student" >My Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/list/classes">List of Classes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink>
          </li>
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
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/portal/instructor" >My profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/new/class">Create a Class</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink>
          </li>
        </>
      )
    } else {
      continue 
    }
  }
})

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Stretch Goals</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            <NavLink className="nav-link navbar-login" aria-current="page" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink>
          </li>
          </>
        }
          </ul>
        </div>
      </div>
    </nav>
  
    </>
  )
}

export default Nav;
