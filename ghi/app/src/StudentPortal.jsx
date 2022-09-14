import React, { useState, useEffect } from "react";
import Nav from './Nav';
import MyClassList from "./StudentClassList";

function StudentPortal() {
    const [students, setStudents] = useState([]);

    async function fetch_student_user() {
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
        fetch_student_user();
    }, []);

    const studentFilter = (student) => {
        return student.username === items;
    }



    return (
        <>
        <Nav/>
        <h1 className='mt-4'>Student Profile</h1>
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
                {students.filter(studentFilter).map(student => {
                    return (
                        <tr key={student.id}>
                            <td><img src ={student.profile_picture}alt='' style={{maxWidth: '150px', maxHeight: '150px', objectFit: 'contain'}}/> </td>
                            <td>{student.first_name} {student.last_name}</td>
                            <td>{student.username}</td>
                            <td>{student.email}</td>
                            <td>{student.phone_number}</td>
                        </tr>
                    );
                })}

                </tbody>
            </table>
        </div>
        <div>
            <MyClassList />
        </div>
        
    </>
    );
}


export default StudentPortal;