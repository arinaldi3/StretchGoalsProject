import React, { useState,useEffect } from "react";
import Nav from './Nav';
import ClassListItem from "./ClassListItem";
import { useToken } from "./Authentication";

function MyClassList({ user }) {
    const [classes, setClasses] = useState([]);
    const currentUser = window.localStorage.getItem('key')
    const updatedUser = currentUser.split('"').join('')
    
    const [studentData, setStudentData] = useState({username: updatedUser});
    console.log(studentData)
    const [token] = useToken();

    async function fetch_classes() {
        
        let classData = await fetch("http://localhost:8080/api/classes/");
        let {classes} = await classData.json();
        
        let filteredClasses = classes.filter(lesson => {
            if (lesson.students.length > 0) {
                let owns = false;
                lesson.students.forEach(student => {
                    owns = (student.username == studentData.username)
                    if (owns) {
                        return owns;
                    }
                })
                return owns;
            }
            return false;
        });
        setClasses(filteredClasses)
        
        console.log(classes)
    }

    async function fetch_studentInfo() {
        let username = localStorage.getItem('key');
        username = username.replaceAll('"', '');
        let userData = await fetch(`http://localhost:8100/api/account/${username}/`, {credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }});
        let student = await userData.json();
        console.log(student)
        setStudentData(student);
        console.log(student)
        
    }

    useEffect(() => {

        fetch_studentInfo();
        fetch_classes();
        
    }, []);

    const handleAttend = async (cData) => {
        cData = {...cData, student:studentData.username}
        const fetchConfig = {
            method: 'PUT',
            body: JSON.stringify(cData),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const attendClassUrl = `http://localhost:8080/api/classes/${cData.id}/attend/`
        const res = await fetch(attendClassUrl, fetchConfig)
    

    };

    
    return (
        <>
        <h3>My Class List</h3>
        <div className="table table-striped">
            <table>
                <thead>
                    <tr>
                        <th>Difficulty</th>
                        <th>Class Size</th>
                        <th>Class Name</th>
                        <th>Starts</th>
                        <th>Ends</th>
                        <th>Instructor</th>
                    </tr>
                </thead>
                <tbody>
                {classes.map((lesson) => {
                    return (
                        <ClassListItem hideButton={true} lesson={lesson} handleAttend={handleAttend}/>
                    );
                })}
                </tbody>
            </table>
        </div>
    </>
    );
}


export default MyClassList;

