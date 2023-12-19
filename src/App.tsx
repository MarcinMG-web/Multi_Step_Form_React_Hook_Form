import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Contact from './Steps/Contact';
import Education from './Steps/Education';
import About from './Steps/About';
import Confirm from './Steps/Confirm';
import Stepper from './Steps/Stepper';

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
