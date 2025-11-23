import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';

const EmployeeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', position: '' });
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/employees', formData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    onSubmit();
    setFormData({ name: '', email: '', position: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add Employee</h3>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={formData.position}
        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;