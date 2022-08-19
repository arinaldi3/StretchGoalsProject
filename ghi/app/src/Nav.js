import { NavLink } from 'react-router-dom';
import './App.css';

function Nav() {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            </ul>
        </div>
        


    </nav>
)
}

export default Nav;
