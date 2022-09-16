import React, { useState,useEffect } from "react";
import InstructorFields from "./InstructorInfo";
import Nav from '../Nav';
import { useNavigate } from 'react-router-dom'

function InstructorList() {
  const [instructors, setInstructors] = useState([]);

  async function fetch_instructors() {
    let instructorData = await fetch("http://localhost:8100/api/instructors/");
    // console.log(instructorData)
    let {instructors} = await instructorData.json();
    setInstructors(instructors);
  }

  useEffect(() => {
    fetch_instructors();
  },[]);

  // let navigate = useNavigate(); 
  // const routeChange = (id) => { 
  //   let path = `http://localhost:8100/api/instructors/${id}`; 
  //   navigate(path);
  // }

  return (
    <>
    <Nav/>
    <h1>List of Instructors</h1>
    <div className="table table-striped">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Certification</th>
            <th>Yoga Studio</th>
            <th>Instagram</th>
            <th>Profile Picture</th>
            <th>View Profile</th>
          </tr>
        </thead>
        {instructors.map((instructor, column) => {
          return <InstructorFields key={column} InstructorInfo={instructor} />;
        })}
      </table>
    </div>
    </>
  );
}

export default InstructorList;