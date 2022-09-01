import React, { useState,useEffect } from "react";


function ClassesList({ user }) {
    const [classes, setClasses] = useState([]);

    async function fetch_classes() {
        let classData = await fetch("http://localhost:8080/api/classes/");
        let data = await classData.json();
        setClasses(data.classes);
    }

    useEffect(() => {
        fetch_classes();
    }, []);

    
    return (
        <>
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
                        {/* <th>Schedule</th>
                        <th>Instructor</th> */}
                    </tr>
                </thead>
                <tbody>
                {classes.map((lesson) => {
                    return (
                        <tr key={lesson.id}>
                            <td>{lesson.difficulty}</td>
                            <td>{lesson.class_size}</td>
                            <td>{lesson.class_name}</td>
                            <td>{new Date(lesson.start).toLocaleString()}</td>
                            <td>{new Date(lesson.end).toLocaleString()}</td>
                            {/* <td>{lesson.schedule}</td>
                            <td>{lesson.instructor}</td> */}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    </>
    );
}


export default ClassesList;

