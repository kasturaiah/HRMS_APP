import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../App';

const Navbar = () => {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('/auth/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setToken(null);
      localStorage.removeItem('token');
      navigate('/');
    } catch (err) {
      alert('Logout failed');
    }
  };

  if (!token) return null;

  return (
    <nav className="navbar">
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/teams">Teams</Link>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;