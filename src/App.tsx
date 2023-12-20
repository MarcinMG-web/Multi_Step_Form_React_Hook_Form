import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

import Contact from './FormPage/Contact';
import Education from './FormPage/Education';
import About from './FormPage/About';
import Confirm from './FormPage/Confirm';
import Stepper from './FormPage/Stepper';
import FinalStep from './FormPage/FinalStep';

export default function App(): JSX.Element {
  const { pathname } = useLocation();
  return (
    <div className='App'>
      {pathname === '/success' ? null : <Stepper />}
      <Routes>
        <Route path='/' element={<Contact />} />
        <Route path='/education' element={<Education />} />
        <Route path='/about' element={<About />} />
        <Route path='/confirm' element={<Confirm />} />
        <Route path='/success' element={<FinalStep />} />
      </Routes>
    </div>
  );
}
