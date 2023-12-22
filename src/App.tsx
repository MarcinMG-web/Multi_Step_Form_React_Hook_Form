import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

import Contact from './FormPage/Contact/Contact';
import Education from './FormPage/Education/Education';
import About from './FormPage/About/About';
import Review from './FormPage/Review/Review';
import Stepper from './FormPage/Navigation/Stepper';
import FinalStep from './FormPage/FinalStep/FinalStep';
import Error from './FormPage/Error/Error';

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
