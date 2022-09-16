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
                {/* <li>Name: {InstructorDetail.first_name} {InstructorDetail.last_name}</li>
                <li>Email: {InstructorDetail.email}</li>
                <li>Certification: {InstructorDetail.certification}</li>
                <li>Yoga Studio: {InstructorDetail.yoga_studio}</li>
                <li>Instagram Handle: {InstructorDetail.instagram}</li> */}

            </dl>
            {/* <table className="table table-striped">
                <thead>
                    <tr> */}
                        {/* <th>Name</th>
                        <th>Email</th>
                        <th>Certification</th>
                        <th>Yoga Studio</th>
                        <th>Instagram</th> */}
                        {/* <th>Profile Picture</th> */}
                        {/* <th scope="col">Instructor Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Certification</th>
                        <th scope="col">Yoga Studio</th>
                        <th scope="col">Instagram Handle</th>
                    </tr> */}
                {/* </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <td>{InstructorDetail.first_name} {InstructorDetail.last_name}</td>
                        <td>{InstructorDetail.email}</td>
                        <td>{InstructorDetail.certification}</td>
                        <td>{InstructorDetail.yoga_studio}</td>
                        <td>{InstructorDetail.instagram}</td> */}
                        {/* <td>{InstructorDetail.profile_picture}</td> */}
                    {/* </tr>
                    
                </tbody>
            </table> */}
        </div>
    )
}

export default InstructorDetail;
