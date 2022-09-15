import React, { useState, useEffect } from "react";
import Nav from './Nav';
import InstructorClasses from "./InstructorClassList";
import { NavLink } from 'react-router-dom';


// deleted curly brackets user in parameter
function InstructorPortal() {
  const [instructors, setInstructors] = useState([]);
  const [classes, setClasses] = useState([]);
  const [noClasses, setNoClasses] = useState("none");

  async function fetchInstructorUser() {
    let instructorData = await fetch(`http://localhost:8100/api/instructors/`);
    let data = await instructorData.json();
    setInstructors(data.instructors);
    let classData = await fetch("http://localhost:8080/api/classes/");
    let {classes} = await classData.json();
    setClasses(classes);
  }
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("key"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    fetchInstructorUser();
  }, []);
  useEffect(() => {
    if (classes.length === 0) {
      setNoClasses(true)
    }
}, [classes]);

  const InstructorFilter = (instructor) => {
    return instructor.username === items;
  };

  return (
    <> 
    <Nav/> 
    <div className="userProfile">
    {instructors.filter(InstructorFilter).map((instructor) => {
      return (
        <div key={instructor.id}>
          <div className="left">
            <div className="leftImg">
              <img className="profileImg" src={instructor.profile_picture} alt="" />{" "}
            </div>
            <div>
            <NavLink className="navbar-brand" to="/instructorprofile">{instructor.username}</NavLink>
            </div>
          </div>
          <div className="right">
          <h1>Instructor Profile</h1>
            <p>Name: {instructor.first_name} {instructor.last_name}</p>
            <p>Email: {instructor.email}</p>
            <p>Phone: {instructor.phone_number}</p>
          </div>
        </div>
      )
    } )}
      <div className="bottom">
        <InstructorClasses classes={classes} items={items} noClasses={noClasses}/>  
      </div>
    </div>
    </>
  );
}

export default InstructorPortal;