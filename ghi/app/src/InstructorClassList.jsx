import React, {useState} from "react";

function InstructorClasses(props) {
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
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>
                {props.classes.map((lesson) => {
                    if (lesson.instructor.username === props.items) {
                        return (
                            <tr key={lesson.id}>
                                <td>{lesson.difficulty}</td>
                                <td>{lesson.class_size}</td>
                                <td>{lesson.class_name}</td>
                                <td>{new Date(lesson.start).toLocaleString()}</td>
                                <td>{new Date(lesson.end).toLocaleString()}</td>
                            </tr>
                        );
                    }
                })}
                </tbody>
            </table>
            </div>
        </>
    );

}    


export default InstructorClasses