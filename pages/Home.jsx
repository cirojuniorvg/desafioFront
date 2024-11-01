import React, { useState } from 'react';
import axios from 'axios';
import UserSearch from '../components/UserSearch';
import UserDetails from '../components/UserDetails';
import RepositoryList from '../components/RepositoryList';
import './Home.css'; // Importando o arquivo CSS

const Home = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUser = async (username) => {
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      setUser(userResponse.data); 

      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepos(reposResponse.data); 
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      setUser(null); 
      setRepos([]); 
    }
  };

  return (
    <div className="container mt-3">
      <UserSearch onSearch={fetchUser} />
      {user && <UserDetails user={user} />}
      {repos.length > 0 && <RepositoryList repos={repos} username={user.login} />}
    </div>
  );
};

export default Home;
