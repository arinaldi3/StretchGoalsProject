import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateStudent from './CreateStudent';
import CreateInstructor from './CreateInstructor';
import InstructorList from './InstructorsList'
import ClassesList from './ClassesList';
import StudentPortal from './StudentPortal';
import InstructorPortal from './InstructorPortal';
// import Login from './Login';
import CreateClass from './CreateClass';
import Login from './Login';
import { AuthProvider } from './Authentication';
import { useState } from 'react';
import InstructorsListPage from './InstructorsPage';
import InstructorDetail from './InstructorDetail';


function App(key) {
  return (
    <>
      <AuthProvider>
        {/* <Nav/> */}
        <div className="BackGround">
          <div className="">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/new" >
                <Route path="student" element={<CreateStudent />} />
                <Route path="instructor" element={<CreateInstructor />} />
                <Route path="class" element={<CreateClass />} />
              </Route>
              <Route path="/list">
                {/* <Route path="instructors" element={<InstructorsListPage />} />
                <Route path="instructor_detail/:id" element={<InstructorDetail />} /> */}
                <Route path="instructors" element={<InstructorList />} />
                <Route path="classes" element={<ClassesList />} />
              </Route>
              <Route path="/portal">
                <Route path="student" element={<StudentPortal />} />
                <Route path="instructor" element={<InstructorPortal />} />
              </Route>
              <Route>
                <Route path="/login" element={<Login />} />
              </Route>

            </Routes>

          </div>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;

