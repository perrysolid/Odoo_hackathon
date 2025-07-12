import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles'; 

import Navbar from './components/Navbar';
import Hero from './components/hero';
import LoginForm from './components/loginform';
import RegisterForm from './components/RegisterForm';
import Browse from './components/Browse';
import Dashboard from './components/Dashboard';
import ListItemForm from './components/ListItemForm';
import AdminPanel from './components/AdminPanel'; // ✅ newly added

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list-item" element={<ListItemForm />} />
          <Route path="/admin" element={<AdminPanel />} /> {/* ✅ Admin panel route */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
