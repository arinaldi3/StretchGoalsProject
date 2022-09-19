import React, { useState, useEffect } from "react";

function ClassDetail() {
    const [ClassDetail, setClassDetail] = useState([]);
    const getClassDetail = async () => {
        const currentUrl = window.location.href
        const list1 = currentUrl.split("/")
        const classId = list1[5]
        const detailUrl = `http://localhost:8080/api/classes/${classId}`;
        const response = await fetch(detailUrl)
        if (response.ok) {
            const data = await response.json()
            setClassDetail(data)
        }
    }
    useEffect(() => {
        getClassDetail()
    }, []);

    return (
        <div className="mt-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Difficulty</th>
                        <th>Class Size</th>
                        <th>Class Name</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ClassDetail.difficulty}</td>
                        <td>{ClassDetail.class_size}</td>
                        <td>{ClassDetail.class_name}</td>
                        <td>{ClassDetail.start}</td>
                        <td>{ClassDetail.end}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ClassDetail;
