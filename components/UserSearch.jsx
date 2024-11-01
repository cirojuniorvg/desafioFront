import React, { useState } from 'react';
import './UserSearch.css'; 

const UserSearch = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} className="user-search-form mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Escreva um Usarname do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">Pesquisar</button>
    </form>
  );
};

export default UserSearch;
