import React, { useState, useEffect } from "react";
import Nav from './Nav';
import InstructorClasses from "./InstructorClassList";
import { useParams } from 'react-router-dom'


// deleted curly brackets user in parameter
function InstructorPortal() {
const [instructor, setInstructor] = useState([]);
const { id } = useParams();
  // added for testing
const [classes, setClasses] = useState([]);

async function fetchInstructorUser() {
    let instructorData = await fetch(`http://localhost:8100/api/instructors/${id}`);
    let data = await instructorData.json();
    setInstructor(data);
    // added for testing
    let classData = await fetch("http://localhost:8080/api/classes/");
    let {classes} = await classData.json();
    setClasses(classes);
    // console.log(classes)
}



useEffect(() => {
    fetchInstructorUser();
}, []);



return (
    <> 
    <Nav/> 
    <div className="userProfile">
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
        <div class="d-flex justify-content-center">
            <p className="lead mb-4">
                <iframe width="854" height="480" src={instructor.demo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </p>
            
        </div>
        </div>
        
    )
    <div className="bottom">
        <InstructorClasses classes={classes} items={instructor.username}/>  
    </div>
    </div>
    </>
);
}

export default InstructorPortal;