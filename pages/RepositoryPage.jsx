import React from 'react';
import { useParams } from 'react-router-dom';
import RepositoryDetails from '../components/RepositoryDetails';
import './RepositoryPage.css'; // Importando o arquivo CSS

const RepositoryPage = () => {
  const { username, repo } = useParams();
  return (
    <div className="container mt-3">
      <RepositoryDetails username={username} repo={repo} />
    </div>
  );
};

export default RepositoryPage;
