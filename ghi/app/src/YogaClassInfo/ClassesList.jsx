import React, { useState,useEffect } from "react";
import Nav from '../Nav';
import ClassListItem from "./ClassListItem";
import { useToken } from "../Authentication";


function ClassesList({ user }) {
    const [classes, setClasses] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const [token] = useToken();
    const [noClasses, setNoClasses] = useState("none");

    async function fetchClasses() {
        let classData = await fetch("http://localhost:8080/api/classes/");
        let {classes} = await classData.json();
        setClasses(classes);
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
        console.log(student)
        setStudentData(student);
    }

    useEffect(() => {
        fetchClasses();
        fetchStudentInfo();
    }, []);

    useEffect(() => {
        console.log("classeslist", classes)
        if (classes.length === 0) {
            setNoClasses("block")
        } else {
            setNoClasses("none")
        }
    }, [classes]);

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
                        <th>Class Name</th>
                        <th>Class Size</th>
                        <th>Difficulty</th>
                        <th>Instructor</th>
                        <th>Starts</th>
                        <th>Ends</th>
                        <th>Interested?</th>
                    </tr>
                </thead>
                <tbody>
                <div style={{display:noClasses}}>No class available at this moment.</div>
                {classes.map((lesson, index) => {
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
                            <ClassListItem key={index} hideButton={true} lesson={lesson} handleAttend={handleAttend}/>
                        );
                    }
                    return (
                        <ClassListItem key={index} lesson={lesson} handleAttend={handleAttend}/>
                    );
                })}
                </tbody>
            </table>
        </div>
    </>
    );
}


export default ClassesList;

