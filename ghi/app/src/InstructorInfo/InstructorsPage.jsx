import React from 'react';
import InstructorCard from './InstructorCard';

class InstructorsListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instructorColumns: [[], [], [], []],
        };
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/instructors/';
        try {
            const response = await fetch(url);
            if (response.ok) {
                // Get the list of conferences
                const data = await response.json();
        
                // Create a list of for all the requests and
                // add all of the requests to it
                const requests = [];
                for (let instructor of data.instructors) {
                    const detailUrl = `http://localhost:8100/api/instructors/${instructor.id}`;
                    requests.push(fetch(detailUrl));
                }
        
                // Wait for all of the requests to finish
                // simultaneously
                const responses = await Promise.all(requests);
        
                // Set up the "columns" to put the conference
                // information into
                const instructorColumns = [[], [], [], []];
        
                // Loop over the conference detail responses and add
                // each to to the proper "column" if the response is
                // ok
                let i = 0;
                for (const instructorResponse of responses) {
                    if (instructorResponse.ok) {
                        const details = await instructorResponse.json();
                        instructorColumns[i].push(details);
                        i = i + 1;
                        if (i > 3) {
                            i = 0;
                        }
                    } else {
                        console.error(instructorResponse);
                    }
                }
                // Set the state to the new list of three lists of
                // conferences
                this.setState({instructorColumns: instructorColumns});
            }
        } catch (e) {
            console.error(e);
        }        
    }

    render() {
        return (
            <>
                <div className="px-4 py-5 my-5 mt-0 text-center bg-info">
                    <h1 className="display-5 fw-bold">Meet Our Intructors</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.instructorColumns.map((instructorsList, index) => {
                            return (
                                <InstructorCard key={index} list={instructorsList} />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}    

export default InstructorsListPage;
