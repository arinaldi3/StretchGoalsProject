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
import { AuthProvider, useToken } from './Authentication';


function App() {
  const [token, login] = useToken();
  return (
    <>
      <AuthProvider>
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
              <Route path="instructors" element={<InstructorList />} />
              <Route path="classes" element={<ClassesList />} />
            </Route>
          <Route path="/portal">
            <Route path="student" element={<StudentPortal />}/>
            <Route path="instructor" element={<InstructorPortal />}/>
          </Route>
          <Route>
            <Route path="/login" element={<Login login={login} />} />
          </Route>


          {/* <Route path='login' element={<Login/>}/> */}
        </Routes>
      </div>
    </div>
    </AuthProvider>
    </>
  );
}

export default App;

