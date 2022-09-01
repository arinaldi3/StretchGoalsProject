import React, { useState,useEffect } from "react";


function StudentPortal({ user }) {
    const [students, setStudents] = useState([]);

    async function fetch_student_user() {
        let classData = await fetch(`http://localhost:8100/api/students/`);
        let data = await classData.json();
        console.log(user)
        setStudents(data.students);
    }

    useEffect(() => {
        fetch_student_user();
    }, []);

    const studentFilter = (student) => {
        return student.username === user;
    }
    
    return (
        <>
        <h1>Student Profile</h1>
        <div className="table table-striped">
            <table>
                <thead>
                    <tr>
                        <th>Profile Picture HELLO</th>
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
    </>
    );
}


export default StudentPortal;