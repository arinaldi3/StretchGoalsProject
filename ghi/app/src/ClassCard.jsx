import { Link } from "react-router-dom";
import ClassDetail from "./ClassDetail";


function ClassCard(props) {
    return (
        <div className="col">
            {props.list.map(data => {
                const lesson = data
                const detailUrl = '/list/class_detail/' + lesson.id
                return (
                    <div key={lesson.id} className="card mb-3 shadow">
                        <Link to={detailUrl}>
                        <img src={lesson.instructor.profile_picture} className="card-img-top list-card-image" width="50" alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">{lesson.class_name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Instructor: {lesson.instructor.first_name} {lesson.instructor.last_name}
                            </h6>
                            <h6 className="card-subtitle mb-2 text-muted">
                            Difficulty level: {lesson.difficulty}
                            {/* {lesson.class_size} */}
                            </h6>
                        </div>
                        <div>
                            <button>Attend This Class</button>
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

export default ClassCard;
