import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import ClassesList from './ClassesList'
import MainPage from './MainPage'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentPortal from './StudentPortal'
import Login from './Login'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders the class list page', () => {
//   render(<MainPage />);

//   expect(screen.getByRole("img")).toHaveTextContent(/Stretch Goals/);
// })

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
  render(
  <BrowserRouter>
      <Routes>   
          <Route path="/portal/student/" element= {<StudentPortal />}/>
      </Routes>
  </BrowserRouter>
);
  // expect(screen.getByRole("h1")).toHaveTextContent(/Student Profile/);
});

test('tests that login form renders', () => {
  render(
  <BrowserRouter>
    <Routes>   
        <Route path="/login" element= {<Login />}/>
    </Routes>
  </BrowserRouter>
);
})
