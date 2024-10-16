import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Logo</h2>
      <ul>
        <li><i className="fa fa-tachometer" aria-hidden="true"></i> Overview</li>
        <li><i className="fa fa-inbox" aria-hidden="true"></i> Inbox</li>
        <li><i className="fa fa-star" aria-hidden="true"></i> Reviews</li>
        <li><i className="fa fa-list" aria-hidden="true"></i> Leaderboard</li>
        <li><i className="fa fa-map-marker" aria-hidden="true"></i> Location</li>
        <li><i className="fa fa-file" aria-hidden="true"></i> Templates</li>
        <li><i className="fa fa-users" aria-hidden="true"></i> Team</li>
        <li><i className="fa fa-credit-card" aria-hidden="true"></i> Billing</li>
        <li><i className="fa fa-cog" aria-hidden="true"></i> Settings</li>
        <li><i className="fa fa-question-circle" aria-hidden="true"></i> Help</li>
      </ul>
      <button className="add-task-btn">Log Out</button>
    </div>
  );
}

export default Sidebar;
