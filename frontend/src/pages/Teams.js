import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TeamList from '../components/TeamList';
import TeamForm from '../components/TeamForm';

const Teams = () => {
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = () => setRefresh(refresh + 1);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Teams</h1>
        <TeamForm onSubmit={handleRefresh} />
        <TeamList key={refresh} />
      </div>
    </div>
  );
};

export default Teams;