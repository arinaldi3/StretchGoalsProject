import { Link } from "react-router-dom";

function InstructorCard(props) {
    return (
        <div className="col">
            {props.list.map(data => {
                const instructor = data;
                const detailUrl = '/list/instructor_detail/' + instructor.id
                return (
                    <div key={instructor.id} className="card mb-3 shadow">
                        
                        <Link to = {detailUrl}>
                        <img src={instructor.profile_picture} className="card-img-top list-card-image" width="50" alt="img" />
                        <div className="card-body">
                            <h5 className="card-title instructor_name">{instructor.first_name} {instructor.last_name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                {instructor.certification}
                            </h6>
                        </div>
                        <div className="card-footer">
                        <p>Click here for More Details</p>
                        </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default InstructorCard;
