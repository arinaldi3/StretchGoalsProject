import './App.css';
import React from 'react';
import { useAuthContext } from "./Authentication";
import Nav from './Nav';

function MainPage() {
    const { token } = useAuthContext();

    
return (
    <>
    <Nav/>
    <div className="px-5 py-5 my-5 text-center">
    <div className="opacity-75">
    </div>
    <h1>
        <img src="https://i.imgur.com/zNxikxH.png" className="" alt= "Stretch Goals" width="" height=""/>
        </h1>
        <div className="container-sm">
    <div className="col-lg-3 mx-auto">
    </div>
        <p className="lead mb-4">
        Stretch Goals... Not so far away after all!
        </p>
        

        
    </div>
    </div>
    </>
);
}
console.log("Thank you for visiting Stretch Goals! Enjoy!")
export default MainPage;
