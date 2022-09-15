import React from "react";
import { NavLink } from 'react-router-dom';

function InstructorFields({InstructorInfo}) {
  return (
    <>
      <tbody>
        <tr>
          <td>{InstructorInfo.first_name} {InstructorInfo.last_name}</td>
          <td>{InstructorInfo.email}</td>
          <td>{InstructorInfo.certification}</td>
          <td>{InstructorInfo.yoga_studio}</td>
          <td>{InstructorInfo.instagram}</td>
          <td><NavLink className="navbar-brand" to="/instructorprofile">{InstructorInfo.username}</NavLink></td>
          <td><img src ={InstructorInfo.profile_picture}alt='' style={{maxWidth: '150px', maxHeight: '150px', objectFit: 'contain'}}/> </td>
        </tr>
      </tbody>
    </>
  );
}

export default InstructorFields;