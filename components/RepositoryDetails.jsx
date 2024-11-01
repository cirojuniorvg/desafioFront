import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RepositoryDetails.css'; // Importando o arquivo CSS

const RepositoryDetails = ({ username, repo }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/repos/${username}/${repo}`)
      .then((response) => setDetails(response.data))
      .catch((error) => console.error(error));
  }, [username, repo]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="card repository-details-card">
      <div className="card-body">
        <h5 className="card-title">{details.name}</h5>
        <p className="card-text">{details.description}</p>
        <p>Linguagem: {details.language}</p>
        <p>Estrelas: {details.stargazers_count}</p>
        <a 
          href={details.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btnn custom-btn" 
        >
          Ver Repositório no GitHub
        </a>
      </div>
    </div>
  );
};

export default RepositoryDetails;
