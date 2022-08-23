import React, { useEffect, useState } from 'react';

function CreateClass() {
    const [state, setState] = useState({
        difficulty: '', 
        class_size: '',
        class_name: '',
        starts: '',
        ends: '', 
        // schedule: '',
        // instructor: '',
    })

    const handleSubmit = async event => {
        event.preventDefault();
        const data = state;

        const classUrl = 'http://localhost:8080/api/classes/'
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const classResponse = await fetch(classUrl, fetchConfig)
        if (classResponse.ok) {
            setState({
                difficulty: '', 
                class_size: '',
                class_name: '',
                starts: '',
                ends: '', 
                // schedule: '',
                // instructor: '',
            })
        }
    }
        const handleChange = event => {
            const value = event.target.value;
            setState({
                ...state,
                [event.target.name]: value
            })
        }

    return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4" id="to-form">
            <h1>Create a New Class</h1>
            <form onSubmit={handleSubmit} id="create-class-form">
            <div className="form-floating mb-3">
            <select value={state.difficulty} onChange={handleChange} required id="difficulty" name="difficulty" className="form-select">
                    <option value="">Choose a Difficulty Level</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                {/* <input onChange={handleChange} value = {state.difficulty}placeholder="Difficulty" required type="text" name="difficulty" id="difficulty" className="form-control" />
                <label htmlFor="difficulty" >Difficulty</label> */}
                </select>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.class_size}placeholder="Class Size" required type="number" name="class_size" id="class_size" className="form-control" />
                <label htmlFor="class_size">Class Size</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.class_name}placeholder="Class Name" required type="text" name="class_name" id="class_name" className="form-control" />
                <label htmlFor="class_name">Class Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.starts}placeholder="Date, Time" required type="datetime-local" name="starts" id="starts" className="form-control" />
                <label htmlFor="starts">Starts</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.ends}placeholder="Date, Time" required type="datetime-local" name="ends" id="ends" className="form-control" />
                <label htmlFor="ends">Ends</label>
            </div>
            {/* <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.schedule}placeholder="Schedule" required type="text" name="schedule" id="schedule" className="form-control" />
                <label htmlFor="schedule">Schedule</label>
            </div> */}
            {/* <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.instructor}placeholder="Instructor" required type="text" name="instructor" id="instructor" className="form-control" />
                <label htmlFor="instructor">Instructor</label>
            </div> */}
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    )
}

export default CreateClass;