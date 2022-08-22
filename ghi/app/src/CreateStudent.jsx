import React, { useEffect, useState } from 'react';

function CreateStudent() {
    const [state, setState] = useState({
        name: '', 
        address: '',
        phone_number: '',
        email: '', 
        password: '',
    })

    const handleSubmit = async event => {
        event.preventDefault();
        const data = state;

        const studentUrl = 'http://localhost:8100/api/students/'
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const studentResponse = await fetch(studentUrl, fetchConfig)
        if (studentResponse.ok) {
            setState({
                name: '',
                address: '',
                phone_number: '',
                email: '', 
                password: '',
            })
        }
    }
}
