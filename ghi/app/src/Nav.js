import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Stretch Goals</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="list/instructors">Meet the Instructors</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="list/classes">List of Classes</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="new/class">Create a Class</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">Sign up</a>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="new/student">Sign up as a student</NavLink></li>
              <li><NavLink className="dropdown-item" to="new/instructor">Sign up as an instructor</NavLink></li>
            </ul>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
