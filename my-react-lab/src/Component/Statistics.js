import React from "react";
import PropTypes from 'prop-types';

function Statistics({ stats }) {
  const { totalUsers, activeUsers, newSignups, activePercentage } = stats;

  return (
    <div className="statistics">
      <h1>Statistics:</h1>
      <p>Total Users: {totalUsers}</p>
      <p>Active Users: {activeUsers}</p>
      <p>New Signups: {newSignups}</p>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${activePercentage}%` }}
        ></div>
      </div>
      <p>Active Users: {activePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  stats: PropTypes.shape({
    totalUsers: PropTypes.number.isRequired,
    activeUsers: PropTypes.number.isRequired,
    newSignups: PropTypes.number.isRequired,
    activePercentage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Statistics;




