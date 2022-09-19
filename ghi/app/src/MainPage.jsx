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
        <img src="https://i.imgur.com/uwCCNeJ.png" className="img-fluid" alt= "Stretch Goals" width="69%" height= "auto"/>
        
        <div className="container-sm">
    <div className="col-lg-3 mx-auto">
    </div>
        <p className="lead mb-4 text-white">
        Stretch Goals... Not so far away after all!
        </p>        
    </div>
    </div>
    </>
);
}
console.log("Thank you for visiting Stretch Goals! Enjoy!")
export default MainPage;
