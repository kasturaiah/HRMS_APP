import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';

const Employees = () => {
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = () => setRefresh(refresh + 1);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Employees</h1>
        <EmployeeForm onSubmit={handleRefresh} />
        <EmployeeList key={refresh} />
      </div>
    </div>
  );
};

export default Employees;