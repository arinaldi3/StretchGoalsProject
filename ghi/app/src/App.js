import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateStudent from './CreateStudent';
import CreateInstructor from './CreateInstructor';
import Login from './Login';

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
          </Route>
          {/* <Route path='login' element={<Login/>}/> */}
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

