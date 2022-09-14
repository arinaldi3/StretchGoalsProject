import React, { useState, useEffect } from "react";
import Nav from './Nav';
import InstructorClassList from "./InstructorClassList";
import InstructorClasses from "./TestInstructorClassList";


// deleted curly brackets user in parameter
function InstructorPortal() {
  const [instructors, setInstructors] = useState([]);
  // added for testing
  const [classes, setClasses] = useState([]);


  async function fetch_instructor_user() {
    let instructorData = await fetch(`http://localhost:8100/api/instructors/`);
    let data = await instructorData.json();
    setInstructors(data.instructors);
    // added for testing
    let classData = await fetch("http://localhost:8080/api/classes/");
    let {classes} = await classData.json();
    setClasses(classes);
    console.log(classes)
  }
  

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("key"));
    if (items) {
      setItems(items);
      console.log(items)
    }
  }, []);

  useEffect(() => {
    fetch_instructor_user();
  }, []);

  const InstructorFilter = (instructor) => {
    return instructor.username === items;
  };

  return (
    <> 
    <Nav/>     
    <h1>Instructor Profile</h1>
      <div className="table table-striped">
        <table>
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              {/* <th>Classes I'm Signed up For</th> */}
            </tr>
          </thead>
          <tbody>
            {instructors.filter(InstructorFilter).map((instructor) => {
              return (
                <tr key={instructor.id}>
                  <td>
                    <img
                      src={instructor.profile_picture}
                      alt=""
                      style={{
                        maxWidth: "150px",
                        maxHeight: "150px",
                        objectFit: "contain",
                      }}
                    />{" "}
                  </td>
                  <td>
                    {instructor.first_name} {instructor.last_name}
                  </td>
                  <td>{instructor.username}</td>
                  <td>{instructor.email}</td>
                  <td>{instructor.phone_number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <InstructorClasses classes={classes} items={items}/>       
    </>
  );
}

export default InstructorPortal;