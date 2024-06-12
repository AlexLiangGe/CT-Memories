import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import Edit from './pages/AdminEdit/Edit';
import Add from './pages/AdminAdd/Add';
import 'animate.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:graduateId" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
