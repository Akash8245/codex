import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import DS from './components/DS';
import Java from './components/Java';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<DS />} />
          <Route path="/java" element={<Java />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
