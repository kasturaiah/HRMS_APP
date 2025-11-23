import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [teams, setTeams] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetchEmployees();
    fetchTeams();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get('/employees', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setEmployees(res.data);
  };

  const fetchTeams = async () => {
    const res = await axios.get('/teams', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTeams(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/employees/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchEmployees();
  };

  const handleAssign = async (employeeId, teamId) => {
    await axios.post('/employees/assign', { employeeId, teamId }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchEmployees();
  };

  return (
    <div className="list">
      {employees.map(emp => (
        <div key={emp.id} className="card">
          <h3>{emp.name}</h3>
          <p>Email: {emp.email}</p>
          <p>Position: {emp.position}</p>
          <p>Teams: {emp.Teams?.map(t => t.name).join(', ') || 'None'}</p>
          <select onChange={(e) => handleAssign(emp.id, e.target.value)}>
            <option value="">Assign to Team</option>
            {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          <button onClick={() => handleDelete(emp.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;