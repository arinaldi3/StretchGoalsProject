import React, { useState,useEffect } from "react";
import Nav from './Nav';
import ClassListItem from "./ClassListItem";
import { useToken } from "./Authentication";


function ClassesList({ user }) {
    const [classes, setClasses] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const [token] = useToken();

    async function fetch_classes() {
        let classData = await fetch("http://localhost:8080/api/classes/");
        let {classes} = await classData.json();
        setClasses(classes);
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
    }

    useEffect(() => {
        fetch_classes();
        fetch_studentInfo();
    }, []);

    const handleAttend = async (cData) => {
        cData = {...cData, student:studentData.id}
    
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
        <Nav/>
        <h1>List of Classes</h1>
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
                        <th>Interested?</th>
                    </tr>
                </thead>
                <tbody>
                {classes.map((lesson) => {
                    console.log(lesson)
                    let owns = false;
                    if (lesson.students.length > 0) {
                        lesson.students.every(student => {
                            console.log(student.id, studentData.id)
                            owns = (student.id === studentData.id)
                            if (owns) {
                                return false;
                            }
                            return true;
                        })
                    }
                    if (owns) {
                        return (
                            <ClassListItem hideButton={true} lesson={lesson} handleAttend={handleAttend}/>
                        );
                    }
                    return (
                        <ClassListItem lesson={lesson} handleAttend={handleAttend}/>
                    );
                })}
                </tbody>
            </table>
        </div>
    </>
    );
}


export default ClassesList;

