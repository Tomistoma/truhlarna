// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Dilna from './Dilna';
import Projekty from './Projekty';
import Kontakt from './Kontakt';
import About from './About';
import Navbar from './Navbar';

function App() {
  return (
    
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap" rel="stylesheet"></link>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dilna" element={<Dilna />} />
        <Route path="/projekty" element={<Projekty />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/onas" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
