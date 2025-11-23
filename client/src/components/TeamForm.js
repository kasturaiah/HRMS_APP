import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';

const TeamForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/teams', formData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    onSubmit();
    setFormData({ name: '', description: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add Team</h3>
      <input
        type="text"
        placeholder="Team Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <button type="submit">Add Team</button>
    </form>
  );
};

export default TeamForm;