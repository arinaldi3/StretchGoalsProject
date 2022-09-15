import React, { useState, useEffect } from "react";
import Nav from './Nav';
import InstructorClasses from "./InstructorClassList";


// deleted curly brackets user in parameter
function InstructorPortal() {
  const [instructors, setInstructors] = useState([]);
  // added for testing
  const [classes, setClasses] = useState([]);

  async function fetchInstructorUser() {
    let instructorData = await fetch(`http://localhost:8100/api/instructors/`);
    let data = await instructorData.json();
    setInstructors(data.instructors);
    // added for testing
    let classData = await fetch("http://localhost:8080/api/classes/");
    let {classes} = await classData.json();
    setClasses(classes);
    // console.log(classes)
  }
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("key"));
    if (items) {
      setItems(items);
      // console.log(items)
    }
  }, []);

  useEffect(() => {
    fetchInstructorUser();
  }, []);

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
            {instructor.username}
            </div>
          </div>
          <div className="right">
          <h1>Instructor Profile</h1>
            <p>Name: {instructor.first_name} {instructor.last_name}</p>
            <p>Email: {instructor.email}</p>
            <p>Phone: {instructor.phone_number}</p>
            {/* <p>Yoga Studio: {instructor.yoga_studio}</p> */}
            
          </div>
        </div>
      )
    } )}
      <div className="bottom">
        <InstructorClasses classes={classes} items={items}/>  
      </div>
    </div>
    </>
  );
}

export default InstructorPortal;