import React, { useState,useEffect } from "react";
import InstructorFields from "./InstructorInfo";
import Nav from '../Nav';

function InstructorList() {
  const [instructors, setInstructors] = useState([]);

  async function fetch_instructors() {
    let instructorData = await fetch("http://localhost:8100/api/instructors/");
    let {instructors} = await instructorData.json();
    setInstructors(instructors);
  }

  useEffect(() => {
    fetch_instructors();
  },[]);

  return (
    <>
    <Nav/>
    <div className="list mt-5 shadow p-4 mt-4">
    <h1 className="centered">Your Instructors</h1>
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
    </div>
    </>
  );
}

export default InstructorList;