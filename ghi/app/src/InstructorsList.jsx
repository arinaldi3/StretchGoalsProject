import React from "react";
import InstructorFields from "./InstructorInfo";
import data from './TestInstructorData'

function InstructorList() {
  return (
    <>
    <h1>List of Instructors</h1>
    <div className="table table-striped">
      <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Certification</th>
                <th>Yoga Studio</th>
                <th>Instagram</th>
                <th>Profile Picture</th>
            </tr>
        </thead>
        {data.map((instructor, column) => {
          console.log(instructor);
          return <InstructorFields key={column} InstructorInfo={instructor} />;
        })}
      </table>
    </div>
    </>
  );
}

export default InstructorList;