import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import InstructorsListPage from './TestInstructorsPage';
import ClassesPage from './TestClassesPage';

function App() {
  return (
    <BrowserRouter>
      <Nav />
    <div className="BackGround">
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/new" >
            <Route path="student" element={<CreateStudent/>}/>
            <Route path="instructor" element={<CreateInstructor/>}/>
            <Route path="class" element={<CreateClass/>}/>
          </Route>
          <Route path="/list">
              <Route path="instructors" element={<InstructorsListPage />} />
              <Route path="classes" element={<ClassesPage />} />
            </Route>
          <Route path="/portal">
            <Route path="student" element={<StudentPortal />}/>
            <Route path="instructor" element={<InstructorPortal />}/>
          </Route>

          {/* <Route path='login' element={<Login/>}/> */}
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

