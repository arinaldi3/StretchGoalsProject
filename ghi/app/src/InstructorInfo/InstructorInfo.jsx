import React from "react";
import { useNavigate } from 'react-router-dom';

function InstructorFields({InstructorInfo}) {

  let navigate = useNavigate(); 
  const routeChange = (id) => { 
    let path = `/profile/${id}`; 
    navigate(path);
  }

  return (
    <>
      <tbody>
        <tr>
          <td>{InstructorInfo.first_name} {InstructorInfo.last_name}</td>
          <td>{InstructorInfo.email}</td>
          <td>{InstructorInfo.certification}</td>
          <td>{InstructorInfo.yoga_studio}</td>
          <td>{InstructorInfo.instagram}</td>
          <td><img src ={InstructorInfo.profile_picture}alt='' style={{maxWidth: '150px', maxHeight: '150px', objectFit: 'contain'}}/> </td>
          <td><button className="attendClass" onClick={() => routeChange(InstructorInfo.id)}><b>View Profile</b></button></td>
        </tr>
      </tbody>
    </>
  );
}

export default InstructorFields;