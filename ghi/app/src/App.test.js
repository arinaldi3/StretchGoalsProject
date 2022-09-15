import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import ClassesList from './ClassesList'
import MainPage from './MainPage'
import {BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import StudentPortal from './StudentPortal'
import InstructorPortal from './InstructorPortal';
import InstructorList from './InstructorsList'
import Login from './Login'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import CreateClass from './CreateClass'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('tests image when main page renders', () => {
  render(
  <BrowserRouter>
      <Routes>   
          <Route path="/" element= {<MainPage />}/>
      </Routes>
  </BrowserRouter>
);
  expect(screen.getByRole("img")).toBeInTheDocument();
});

test('tests student profile picture when page renders', () => {
  const { container } = render(
  <BrowserRouter>
      <Routes>   
          <Route path="/portal/student" element= {<StudentPortal />}/>
      </Routes>
  </BrowserRouter>
);
  container.getElementsByTagName('h1')
});
// LOGIN TESTS

test('tests that student portal renders with a div', () => {
  const { container } = render(
  <BrowserRouter>
    <Routes>   
        <Route path="portal/student" element= {<StudentPortal />}/>
    </Routes>
  </BrowserRouter>
);
  container.getElementsByTagName('div');


})

<<<<<<< HEAD
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
=======
// test('tests that login form renders', () => {
//   const { container } = render(
//   <BrowserRouter>
//     <Routes>   
//         <Route path="/login" element= {<Login />}/>
//     </Routes>
//   </BrowserRouter>
// );
// const form = container.getElementsByTagName('form');
// expect(form.length).toEqual(1);
// })


test('tests h1 tag in mainpage', () => {
  const { container } = render(
    <BrowserRouter>
      <Routes>   
          <Route path="/" element= {<MainPage />}/>
      </Routes>
    </BrowserRouter>
);
const h1 = container.getElementsByTagName('h1');
expect(h1.length).toEqual(1)

});

test('tests p tag in mainpage', () => {
  const { container } = render(
    <BrowserRouter>
      <Routes>   
          <Route path="/" element= {<MainPage />}/>
      </Routes>
    </BrowserRouter>
);
const pTag = container.getElementsByTagName('p');
expect(pTag.length).toEqual(1)

});

test('tests instructor list', () => {
  const { container } = render(
    <BrowserRouter>
      <Routes>   
          <Route path="/list/instructors" element= {<InstructorList />}/>
      </Routes>
    </BrowserRouter>
);
const title = container.getElementsByTagName('h1');
// expect(title.length).toEqual(1)

});

>>>>>>> 58539da1fd1454be894ab15f14e5c9090731e306
