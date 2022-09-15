import './App.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Nav from './Nav';

function About() {
return (

    <>
    <Nav/>
    <div className="about-section">
        <h1>About Us</h1>
        <p>We are a team of software engineers that wanted to achieve our stretch-goals more consistently.</p>
        <p>In order to do this, we created a yoga application.</p>
    </div>
        <h2 style={{ textAlign: "center"}}>Our Team</h2><div className="row">
            <div className="column">
                <div className="card">
                    <img src="https://i.imgur.com/WaMgfce.png" alt="Ava" style={{width:" 50%"}}/>
                        <div className="container">
                            <h2>Ava Rinaldi</h2>
                            <p className="title">Full-Stack Software Engineer</p>
                            <p>Ava is known for her world record golf bag toss and her relationship with Christiano Renaldo</p>
                            <p>ava@ava.ava</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src="https://i.imgur.com/hPoszjY.png" alt="Alex" style={{width:" 50%"}}/>
                        <div className="container">
                            <h2>Alex Adams</h2>
                            <p className="title">Full-Stack Software Engineer</p>
                            <p>Alex is a big fan of lorem ipsum text.</p>
                            <p>lorem@ipsum.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src="https://i.imgur.com/RwKMaZd.png" alt="Carlos" style={{width:" 50%"}}/>
                        <div className="container">
                            <h2>Carlos Castillo</h2>
                            <p className="title">Full-Stack Software Engineer</p>
                            <p>Carlos loves soccer and sportsball related things.</p>
                            <p>carlos@carlos.carlos</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src="https://i.imgur.com/QYqeO6G.png" alt="Mindy" style={{width:" 50%"}}/>
                        <div className="container">
                            <h2>Mindy Lin</h2>
                            <p className="title">Full-Stack Software Engineer</p>
                            <p>Mindy likes to yodle in her freetime.</p>
                            <p>google@stevejobs.ru</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src="https://i.imgur.com/xqyUmS2.png" alt="Josh" style={{width:" 50%"}}/>
                        <div className="container">
                            <h2>Josh Lee</h2>
                            <p className="title">Full-Stack Software Engineer</p>
                            <p>Josh spends his free time paragliding through the streets of SF.</p>
                            <p>emailyesthis</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
            </div>
        </div>
        </>

);
}

export default About;
