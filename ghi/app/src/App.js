import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import CreateStudent from './StudentInfo/CreateStudent';
import CreateInstructor from './InstructorInfo/CreateInstructor';
import InstructorList from './InstructorInfo/InstructorsList'
import ClassesList from './YogaClassInfo/ClassesList';
import StudentPortal from './StudentInfo/StudentPortal';
import InstructorPortal from './InstructorInfo/InstructorPortal';
import CreateClass from './YogaClassInfo/CreateClass';
import Login from './Login';
import { AuthProvider } from './Authentication';
import InstructorProfile from './InstructorInfo/InstructorProfile';
import About from './About';
import BackGround from './Background';


function App(key) {
  return (
    <>
      <AuthProvider>
      
      
          <div className="container">
          <BackGround/>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/new" >
                <Route path="student" element={<CreateStudent />} />
                <Route path="instructor" element={<CreateInstructor />} />
                <Route path="class" element={<CreateClass />} />
              </Route>
              <Route path="/list">
                <Route path="instructors" element={<InstructorList />} />
                {/* <Route path="instructor" element={<InstructorDetailPage />} /> */}
                <Route path="classes" element={<ClassesList />} />
              </Route>
              <Route path="/profile/:id" element={<InstructorProfile />} />
              <Route path="/portal">
                <Route path="student" element={<StudentPortal />} />
                <Route path="instructor" element={<InstructorPortal />} />
              </Route>
              <Route>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="/about" element={<About />} />

            </Routes>
          </div>
          
      </AuthProvider>
      
    </>
  );
}

export default App;

