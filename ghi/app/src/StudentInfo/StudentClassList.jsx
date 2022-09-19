import React, { useState,useEffect } from "react";
import Nav from '../Nav';
import ClassListItem from "../YogaClassInfo/ClassListItem";
import { useToken } from "../Authentication";

function MyClassList({ user }) {
    const [classes, setClasses] = useState([]);
    const [studentData, setStudentData] = useState(null);
    const [token] = useToken();
    const [noClasses, setNoClasses] = useState("none");

    async function fetchClasses() {
        
        let classData = await fetch("http://localhost:8080/api/classes/");
        let {classes} = await classData.json();
        
        let filteredClasses = classes.filter(lesson => {
            let owns = false;
            if (lesson.students.length > 0) {
                lesson.students.every(student => {
                    owns = (student.id === studentData.id)
                    if (owns) {
                        return false;
                    }
                    return true;
                })
                return owns;
            }
            return owns;
        });
        setClasses(filteredClasses)
    }

    async function fetchStudentInfo() {
        let username = localStorage.getItem('key');
        username = username.replaceAll('"', '');
        let userData = await fetch(`http://localhost:8100/api/account/${username}/`, {credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }});
        let student = await userData.json();
        setStudentData(student);
    }

    useEffect(() => {
        fetchStudentInfo();
    }, []);

    useEffect(() => {
        if (studentData !== null) {
            fetchClasses();
        } 
    }, [studentData])

    useEffect(() => {
        if (classes.length === 0) {
            setNoClasses("block")
        } else {
            setNoClasses("none")
        }
    }, [classes]);

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
                        <th>Class Name</th>
                        <th>Class Size</th>
                        <th>Difficulty</th>
                        <th>Instructor</th>
                        <th>Starts</th>
                        <th>Ends</th>
                    </tr>
                </thead>
                <tbody>
                <div style={{display:noClasses}}>You have not picked any class.</div>
                {classes.map((lesson) => {
                    return (
                        <ClassListItem key={lesson.id} hideButton={true} lesson={lesson} handleAttend={handleAttend}/>
                    );
                })}
                </tbody>
            </table>
        </div>
    </>
    );
}


export default MyClassList;

