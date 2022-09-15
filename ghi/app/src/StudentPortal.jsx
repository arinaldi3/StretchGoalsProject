import React, { useState, useEffect } from "react";
import Nav from './Nav';
import MyClassList from "./StudentClassList";

function StudentPortal() {
    const [students, setStudents] = useState([]);

    async function fetchStudentUser() {
        let classData = await fetch(`http://localhost:8100/api/students/`);
        let data = await classData.json();
        setStudents(data.students);
    }

    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('key'));
        if (items) {
        setItems(items);
        }
    }, []); 

    useEffect(() => {
        fetchStudentUser();
    }, []);

    const studentFilter = (student) => {
        return student.username === items;
    }

    return (
        <>
        <Nav/> 
        <div className="instructorProfile">
        {students.filter(studentFilter).map((student) => {
            return (
                <div key={student.id}>
                    <div  className="left">
                        <div className="leftImg">
                            <img className="instructorImg" src={student.profile_picture} alt="" />{" "}
                        </div>
                        <div>
                            {student.username}
                        </div>
                    </div>    
                    <div className="right">
                    <h1>Student Profile</h1>
                        <p>Name: {student.first_name} {student.last_name}</p>
                        <p>Email: {student.email}</p>
                        <p>Phone: {student.phone_number}</p>
                    </div>
                </div>
            )
        })} 
            <div className="bottom">
                <MyClassList />  
            </div>
        </div>
        </>
    );
}


export default StudentPortal;

