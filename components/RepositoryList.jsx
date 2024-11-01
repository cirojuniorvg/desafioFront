import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RepositoryList.css'; 

const RepositoryList = ({ repos, username }) => {
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedRepos = repos.sort((a, b) => {
    return sortOrder === 'desc' ? b.stargazers_count - a.stargazers_count : a.stargazers_count - b.stargazers_count;
  });

  return (
    <div>
    
      <div className="sort-button-container">
        <button 
          onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')} 
          className="btn btn-secondary btn-sort"
        >
          Ordenar Estrelas por ({sortOrder === 'desc' ? 'Pior Avaliado' : 'Melhor Avaliado'})
        </button>
      </div>
      <ul className="list-group">
        {sortedRepos.map((repo) => (
          <li key={repo.id} className="list-group-item">
            <Link to={`/repository/${username}/${repo.name}`}>
              {repo.name} - ⭐ {repo.stargazers_count}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
