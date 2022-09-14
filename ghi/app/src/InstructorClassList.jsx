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
            // if (lesson.instructor.length > 0) {
            //     let owns = false;
            console.log(instructorData)
            if (lesson.instructor.id === instructorData.id) {
                return instructorClass.append(lesson)
            } 
            
                // lesson.instructor.forEach(instructor => {
        //             owns = (instructor.id === instructorData.id)
        //             if (owns) {
        //                 return owns;
        //             }
        //         })
        //         return owns;
        //     }
        //     return false;
        });
        
        setClasses(filteredInstructorClasses)
        
        console.log(classes)
    }

    async function fetchInstructorInfo() {
        let username = localStorage.getItem('key');
        username = username.replaceAll('"', '');
        let userData = await fetch(`http://localhost:8100/api/account/${username}/`, {credentials: "include",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }});
        console.log(userData)
        let instructor = await userData.json();
        console.log(instructor)
        setInstructorData(instructor);
        console.log(instructor)
        
    }

    useEffect(() => {

        fetchInstructorInfo();
        fetchClasses();
        
    }, []);

    // const handleAttend = async (cData) => {
    //     cData = {...cData, instructor:instructorData.id}
    //     const fetchConfig = {
    //         method: 'PUT',
    //         body: JSON.stringify(cData),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     }
    //     const attendClassUrl = `http://localhost:8080/api/classes/${cData.id}/attend/`
    //     const res = await fetch(attendClassUrl, fetchConfig)
    

    // };

    
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
                        {/* <th>Instructor</th> */}
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

