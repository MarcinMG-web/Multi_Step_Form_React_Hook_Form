import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Contact from './FormPage/Contact';
import Education from './FormPage/Education';
import About from './FormPage/About';
import Confirm from './FormPage/Confirm';
import Stepper from './FormPage/Stepper';

export default function App(): JSX.Element {
  return (
    <div className='App'>
      <Router>
        <Stepper />
        <Routes>
          <Route path='/' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/about' element={<About />} />
          <Route path='/confirm' element={<Confirm />} />
        </Routes>
      </Router>
    </div>
  );
}
