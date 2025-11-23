import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App';

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    const res = await axios.get('/teams', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTeams(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/teams/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchTeams();
  };

  return (
    <div className="list">
      {teams.map(team => (
        <div key={team.id} className="card">
          <h3>{team.name}</h3>
          <p>{team.description}</p>
          <p>Employees: {team.Employees?.map(e => e.name).join(', ') || 'None'}</p>
          <button onClick={() => handleDelete(team.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TeamList;