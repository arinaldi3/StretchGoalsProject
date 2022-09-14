import React, { useState,useEffect } from "react";
import Nav from './Nav';
import ClassListItem from "./ClassListItem";
import { useToken } from "./Authentication";

function InstructorClassList({ user }) {
    const [classes, setClasses] = useState([]);
    const [instructorData, setInstructorData] = useState({id:1});
    const [instructorClass, setInstructorClass] = useState([]);
    const [token] = useToken();

    async function fetchClasses() {
        let classData = await fetch("http://localhost:8080/api/classes/");
        let {classes} = await classData.json();
        let filteredInstructorClasses = classes.filter(lesson => {
            if (lesson.instructor.id === instructorData.id) {
                return instructorClass.append(lesson)
            } 
        });
        
        setClasses(filteredInstructorClasses) 
    }

    async function fetchInstructorInfo() {
        let username = localStorage.getItem('key');
        username = username.replaceAll('"', '');
        let userData = await fetch(`http://localhost:8100/api/account/${username}/`, {credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }});
        let instructor = await userData.json();
        setInstructorData(instructor);
    }

    useEffect(() => {
        fetchInstructorInfo();
        fetchClasses();
    }, []);
    
    return (
        <>
        <h3>My Class List</h3>
        <div className="table table-striped">
            <table>
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>Class Size</th>
                        <th>Difficulty</th>
                        <th>Starts</th>
                        <th>Ends</th>
                        
                    </tr>
                </thead>
                <tbody>
                {classes.map((lesson) => {
                    return (
                        <ClassListItem lesson={lesson}/>
                    );
                })}
                </tbody>
            </table>
        </div>
    </>
    );
}


export default InstructorClassList;

