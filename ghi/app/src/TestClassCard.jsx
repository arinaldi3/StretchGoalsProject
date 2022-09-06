import { Link } from "react-router-dom";
import ClassDetail from "./TestClassDetail";


function ClassColumn(props) {
    return (
        <div className="col">
            {props.list.map(data => {
                const lesson = data;
                {/* console.log(lesson) */}
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
                        <div className="card-footer">
                        {/* {new Date(lesson.starts).toLocaleDateString()}
                        -
                        {new Date(lesson.ends).toLocaleDateString()}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill svgicon" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                            </svg>   */}
                        </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default ClassColumn;
