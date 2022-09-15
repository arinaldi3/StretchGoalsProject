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

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
