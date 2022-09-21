import React, {useState} from "react";

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
            <td>{lesson.instructor.first_name} {lesson.instructor.last_name}</td>
            <td>{new Date(lesson.start).toLocaleString()}</td>
            <td>{new Date(lesson.end).toLocaleString()}</td>
            {active ? '': <td><button className="attendClass" onClick = {handleClick}><b>Attend Class</b></button></td>}
            
        </tr>
    )
}

export default ClassListItem