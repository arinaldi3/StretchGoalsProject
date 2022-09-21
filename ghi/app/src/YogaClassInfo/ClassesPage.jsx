import React from 'react';
import ClassCard from './ClassCard';


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
                const data = await response.json();
                const requests = [];
                for (let lesson of data.classes) {
                    const detailUrl = `http://localhost:8080/api/classes/${lesson.id}`;
                    requests.push(fetch(detailUrl));
                }

                const responses = await Promise.all(requests);
                const classColumns = [[], [], [], []];

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
                    <h1 className="display-5 fw-bold">Class Times</h1>
                    <div className="col-lg-6 mx-auto">

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.classColumns.map((classesList, index) => {
                            return (
                                <ClassCard key={index} list={classesList} />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}    

export default ClassesPage;
