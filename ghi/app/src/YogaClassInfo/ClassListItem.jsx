import React, {useState} from "react";
import { Link } from "react-router-dom";

function ClassListItem ({lesson, handleAttend, hideButton}) {
    const [active, setActive] = useState(hideButton);
    function handleClick() {
        setActive(true);
        handleAttend(lesson)
    }
    useState(() => {setActive(hideButton)}, [hideButton])
    return (
        <tr key={lesson.id}>
            <td>{lesson.class_name}</td>
            <td>{lesson.class_size}</td>
            <td>{lesson.difficulty}</td>
            {/* <Link to="/list/instructor"> */}
            <td>{lesson.instructor.username}</td>
            {/* </Link> */}
            <td>{new Date(lesson.start).toLocaleString()}</td>
            <td>{new Date(lesson.end).toLocaleString()}</td>
            {active ? '': <td><button onClick = {handleClick}>Attend This Class</button></td>}
            
        </tr>
    )
}

export default ClassListItem