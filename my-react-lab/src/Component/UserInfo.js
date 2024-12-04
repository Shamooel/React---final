import React from "react";
import PropTypes from 'prop-types';

function UserInfo({ user }) {
  const { name, email, role, profilePicture } = user;

  return (
    <div className="user-info">
      <img src={profilePicture} alt={name} className="profile-picture" />
      <h3>{name}</h3>
      <p>{email}</p>
      <span className={`role-label ${role.toLowerCase().replace(/\s+/g, '-')}`}>{role}</span>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfo;


