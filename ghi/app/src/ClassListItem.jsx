import React, {useState} from "react";

function ClassListItem ({lesson, handleAttend, hideButton}) {
    const [active, setActive] = useState(hideButton);
    console.log(hideButton)
    function handleClick() {
        setActive(true);
        handleAttend(lesson)
    }
    return (
        <tr key={lesson.id}>
            <td>{lesson.difficulty}</td>
            <td>{lesson.class_size}</td>
            <td>{lesson.class_name}</td>
            <td>{new Date(lesson.start).toLocaleString()}</td>
            <td>{new Date(lesson.end).toLocaleString()}</td>
            {/* <td>{lesson.instructor}</td> */}
            {active ? '': <td><button onClick = {handleClick}>Attend This Class</button></td>}
            
        </tr>
    )
}

export default ClassListItem