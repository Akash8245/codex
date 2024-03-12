import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import DS from './components/DS';
import Java from './components/Java';
import Secret from './components/Secret';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<DS />} />
          <Route path="/java" element={<Java />} />
          <Route path="/secret" element={ <Secret/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
