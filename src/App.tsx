import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

import Contact from './FormPage/Contact';
import Education from './FormPage/Education';
import About from './FormPage/About';
import Review from './FormPage/Review';
import Stepper from './FormPage/Stepper';
import FinalStep from './FormPage/FinalStep';
import Error from './FormPage/Error';

export default function App(): JSX.Element {
  const { pathname } = useLocation();
  const excludePath = ['/success', '/error'];
  const showStepper = excludePath.includes(pathname);

  return (
    <div className='App'>
      {showStepper ? null : <Stepper />}
      <Routes>
        <Route path='/' element={<Contact />} />
        <Route path='/education' element={<Education />} />
        <Route path='/about' element={<About />} />
        <Route path='/confirm' element={<Review />} />
        <Route path='/success' element={<FinalStep />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  );
}
