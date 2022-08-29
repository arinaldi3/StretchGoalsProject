import React, { useState,useEffect } from "react";
import InstructorFields from "./InstructorInfo";

function InstructorList() {
  const [instructors, setInstructors] = useState([]);

  async function fetch_instructors() {
    let instructorData = await fetch("http://localhost:8100/api/instructors/");
    console.log(instructorData)
    let {instructors} = await instructorData.json();
    setInstructors(instructors);
  }

  useEffect(() => {
    fetch_instructors();
  },[]);
  return (
    <>
    <h1>List of Instructors</h1>
    <div className="table table-striped">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    {/* <th>Address</th>
                    <th>Phone Number</th>
                    <th>Username</th> */}
                    <th>Email</th>
                    {/* <th>Password</th> */}
                    <th>Certification</th>
                    <th>Yoga Studio</th>
                    <th>Instagram</th>
                    <th>Profile Picture</th>
                </tr>
            </thead>
            {instructors.map((instructor, column) => {
                console.log(instructor);
                return <InstructorFields key={column} InstructorInfo={instructor} />;
                })}
        </table>
    </div>
    </>
  );
}

export default InstructorList;
