import { Link } from "react-router-dom";

function InstructorColumn(props) {
    return (
        <div className="col">
            {props.list.map(data => {
                const instructor = data;
                let instructorUrl = `instructors/${instructor.id}/`
                return (
                    <div key={instructor.id} className="card mb-3 shadow">
                        <Link to={instructorUrl}>
                        <img src={instructor.profile_picture} className="card-img-top list-card-image" width="50" alt="img" />
                        </Link>
                        {/* <img src={data.picture_url} className="card-img-top" alt="This is a discription"/> */}
                        <div className="card-body">
                            <h5 className="card-title instructor_name">{instructor.first_name} {instructor.last_name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                {instructor.certification} {instructor.email}
                            </h6>
                            {/* <h6 className="card-subtitle mb-2">
                                {instructor.email}
                            </h6> */}
                        </div>
                        <div className="card-footer">
                        {instructor.email}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default InstructorColumn;