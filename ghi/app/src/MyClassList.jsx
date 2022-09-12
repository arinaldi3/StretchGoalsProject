import React, { useState,useEffect } from "react";

function MyClassList(props) {
    const [myclasses, setMyClasses] = useState([]);
    
    // async function fetch_classes() {
    //     let classData = await fetch("http://localhost:8080/api/classes/");
    //     let data = await classData.json();
    //     setClasses(data.classes);
    // }
    // const onAdd = (lesson) => {
    //     const exist = myClasses.find(i => i.id === lesson.id);
        
    //     setMyClasses([...myClasses, {...lesson}])
        
    // }
    return (
        <div>
            <h4>My Class List:</h4>
            {/* <div>
                {myClass.length === 0 && <div>Empty Class List</div>}
            </div> */}
        </div>
    )
}


export default MyClassList