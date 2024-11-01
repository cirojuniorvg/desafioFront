import React from 'react';
import './UserDetails.css'; 

const UserDetails = ({ user }) => (
  <div className="card mb-4">
    <img 
      src={user.avatar_url} 
      alt="Avatar" 
      className="card-img-top avatar" 
    />
    <div className="card-body">
      <h5 className="card-title">{user.name || user.login}</h5>
      <p>{user.bio}</p>
      <p>Seguidores: {user.followers} - Seguindo: {user.following}</p>
      <p>Email: {user.email || 'N/A'}</p>
    </div>
  </div>
);

export default UserDetails;
