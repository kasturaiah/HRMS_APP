import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Teams from './pages/Teams';
import './styles.css';

export const AuthContext = createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;