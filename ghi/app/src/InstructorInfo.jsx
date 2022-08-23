import React from "react";

function InstructorFields({InstructorInfo}) {
  return (
    <>
      <tbody>
        <tr>
          <td>{InstructorInfo.first_name} {InstructorInfo.last_name}</td>
          {/* <td>{InstructorInfo.address}</td>
          <td>{InstructorInfo.phone_number}</td> */}
          {/* <td>{InstructorInfo.username}</td> */}
          <td>{InstructorInfo.email}</td>
          <td>{InstructorInfo.certification}</td>
          <td>{InstructorInfo.yoga_studio}</td>
          <td>{InstructorInfo.instagram}</td>
          {/* <td>{props.InstructorInfo.profile_picture}</td> */}

          {/* <td>{props.companyInfo.Inventory.join(", ")}</td> */}
        </tr>
      </tbody>
    </>
  );
}

export default InstructorFields;