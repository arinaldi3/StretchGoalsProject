import React, {useState, useEffect} from "react";

function InstructorClasses(props) {
    const [noClasses, setNoClasses] = useState("none");
    const [filteredClasses, setFilteredClasses] = useState([]);

    function filterClasses () {
        let filteredArray = props.classes.map((lesson) => {
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
        }).filter(item => item);
        setFilteredClasses(filteredArray)
    }
    useEffect(() => {
        filterClasses()
    }, [props]);

    useEffect(() => {
        if (filteredClasses.length === 0) {
            setNoClasses("block")
        } else {
            setNoClasses("none")
        }
    }, [filteredClasses]);


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
                <div style={{display:noClasses}}>You have not created any class.</div>
                {filteredClasses}
                </tbody>
            </table>
            </div>
        </>
    );

}    


export default InstructorClasses