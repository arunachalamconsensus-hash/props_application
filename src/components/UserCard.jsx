
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./UserCard.css";

function UserCard({ user }) {

  return (
    <div className="user-card">

      {/* Avatar */}
      <div className="user-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>

      {/* User Name */}
      <h2>{user.name}</h2>

      <span className="user-role">
        Registered User
      </span>

      {/* User Information */}
      <div className="user-details">

        <div className="detail-row">
          <span className="detail-label">City</span>
          <span>{user.city}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Age</span>
          <span>{user.age} Years</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Email</span>
          <span className="email">{user.email}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Phone</span>
          <span>{user.phone}</span>
        </div>

      </div>

      {/* Footer */}
      <div className="card-footer">
        User ID: #{user.id}
      </div>

    </div>
  );
}

export default UserCard;
