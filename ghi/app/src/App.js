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
import { useEffect, useState  } from 'react';



function App() {
  const [token, login] = useToken();
  const [user, setUser] = useState('')

  return (
    <>
    <AuthProvider>
      <Nav />
    <div className="BackGround">
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage user={user} />} />
          <Route path="/new" >
            <Route path="student" element={<CreateStudent/>}/>
            <Route path="instructor" element={<CreateInstructor/>}/>
            <Route path="class" element={<CreateClass user={user}/>}/>
          </Route>
          <Route path="/list">
              <Route path="instructors" element={<InstructorList />} />
              <Route path="classes" element={<ClassesList user={user} />} />
            </Route>
          <Route path="/portal">
            <Route path="student" element={<StudentPortal user={user} />}/>
            <Route path="instructor" element={<InstructorPortal user={user} />}/>
          </Route>
          <Route>
            <Route path="/login" element={<Login login={login} setUser={setUser} />} />
          </Route>

        </Routes>
        
      </div>
    </div>
    </AuthProvider>
    </>
  );
}

export default App;

