import React from 'react';
import { Link } from 'react-router-dom';
import ClassColumn from './TestClassCard';


class ClassesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classColumns: [[], [], [], []],
        };
        
    
    }
    async componentDidMount() {
        const url = 'http://localhost:8080/api/classes/';
        try {
            const response = await fetch(url);
            if (response.ok) {
                // Get the list of conferences
                const data = await response.json();
        
                // Create a list of for all the requests and
                // add all of the requests to it
                const requests = [];
                for (let lesson of data.classes) {
                    const detailUrl = `http://localhost:8080/api/classes/${lesson.id}`;
                    requests.push(fetch(detailUrl));
                }
        
                // Wait for all of the requests to finish
                // simultaneously
                const responses = await Promise.all(requests);
        
                // Set up the "columns" to put the conference
                // information into
                const classColumns = [[], [], [], []];
        
                // Loop over the conference detail responses and add
                // each to to the proper "column" if the response is
                // ok
                let i = 0;
                for (const classResponse of responses) {
                    if (classResponse.ok) {
                        const details = await classResponse.json();
                        classColumns[i].push(details);
                        i = i + 1;
                        if (i > 3) {
                            i = 0;
                        }
                    } else {
                        console.error(classResponse);
                    }
                }
                // Set the state to the new list of three lists of
                // conferences
                this.setState({classColumns: classColumns});
            }
        } catch (e) {
            console.error(e);
        }        
    }

    render() {
        return (
            <>
                <div className="px-4 py-5 my-5 mt-0 text-center bg-info">
                    <img className="bg-white rounded shadow d-block mx-auto mb-4" />
                    <h1 className="display-5 fw-bold">List of Classes</h1>
                    <div className="col-lg-6 mx-auto">
                        {/* <p className="lead mb-4">
                            The only resource you'll ever need to keep track of your shoes.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Link to="/new_shoes" className="btn btn-primary btn-lg px-4 gap-3">Store new shoes!</Link>
                        </div> */}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.classColumns.map((classesList, index) => {
                            return (
                                <ClassColumn key={index} list={classesList} />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}    

export default ClassesPage;
