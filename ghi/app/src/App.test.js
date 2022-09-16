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


//Carlos Tests
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

// Mindy Tests
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
=======

>>>>>>> 4d0a602150fcd9a51653be9efac2e43ecf4237e1
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

// Ava Tests
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

<<<<<<< HEAD
// Alex Test
test('renders about link', () => {
  render(<App />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
=======
>>>>>>> 4d0a602150fcd9a51653be9efac2e43ecf4237e1
