import React, { useState, useEffect } from "react";


function InstructorDetail() {
    const [InstructorDetail, setInstructorDetail] = useState([]);
    const getInstructorDetail = async () => {
        const currentUrl = window.location.href
        const list1 = currentUrl.split("/")
        const instructorId = list1[5]
        const detailUrl = `http://localhost:8100/api/instructors/${instructorId}`;
        const response = await fetch(detailUrl)
        if (response.ok) {
            const data = await response.json()
            setInstructorDetail(data)
        }
    }
    useEffect(() => {
        getInstructorDetail()
    }, []);

    return (
        <div className="mt-5 mb-5">
        <header>
            <h1>Instructor Details</h1>
        </header>
            <dl className="row">
                <dt className="col-sm-3"> Instructor Name:</dt>
                <dd className="col-sm-9">{InstructorDetail.first_name} {InstructorDetail.last_name}</dd>
                <dt className="col-sm-3"> Email:</dt>
                <dd className="col-sm-9">{InstructorDetail.email}</dd>
                <dt className="col-sm-3"> Certification:</dt>
                <dd className="col-sm-9">{InstructorDetail.certification}</dd>
                <dt className="col-sm-3"> Yoga Studio:</dt>
                <dd className="col-sm-9">{InstructorDetail.yoga_studio}</dd>
                <dt className="col-sm-3"> Instagram Handle:</dt>
                <dd className="col-sm-9">{InstructorDetail.instagram}</dd>

            </dl>
        </div>
    )
}

export default InstructorDetail;
