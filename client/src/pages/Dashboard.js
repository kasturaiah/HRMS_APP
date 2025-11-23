import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>HRMS Dashboard</h1>
        <div className="list">
          <Link to="/employees" className="card">
            <h3>Manage Employees</h3>
            <p>View, add, update, and delete employees.</p>
          </Link>
          <Link to="/teams" className="card">
            <h3>Manage Teams</h3>
            <p>View, add, update, and delete teams.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;