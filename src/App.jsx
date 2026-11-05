// eslint-disable-next-line no-unused-vars
import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {

  // User Information
  const users = [
    {
      id: 1,
      name: "Arun Kumar",
      city: "Chennai",
      age: 25,
      email: "arun@gmail.com",
      phone: "9876543210"
    },
    {
      id: 2,
      name: "Priya Sharma",
      city: "Bangalore",
      age: 23,
      email: "priya@gmail.com",
      phone: "9876543211"
    },
    {
      id: 3,
      name: "Rahul Kumar",
      city: "Coimbatore",
      age: 28,
      email: "rahul@gmail.com",
      phone: "9876543212"
    },
    {
      id: 4,
      name: "Sneha Raj",
      city: "Salem",
      age: 24,
      email: "sneha@gmail.com",
      phone: "9876543213"
    },
    {
      id: 5,
      name: "Vikram Singh",
      city: "Madurai",
      age: 30,
      email: "vikram@gmail.com",
      phone: "9876543214"
    }
  ];

  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>UserHub</h2>
        <span>React Props Assignment</span>
      </nav>

      {/* Main Section */}
      <main className="main-content">

        <div className="heading-section">
          <h1>User Management Dashboard</h1>

          <p>
            Explore user information using React
            Parent-to-Child Props.
          </p>
        </div>

        {/* User Statistics */}
        <div className="stats-container">

          <div className="stat-card">
            <h2>{users.length}</h2>
            <p>Total Users</p>
          </div>

          <div className="stat-card">
            <h2>5</h2>
            <p>User Profiles</p>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <p>Props Based Data</p>
          </div>

        </div>

        {/* User Cards */}
        <div className="user-container">

          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}

        </div>

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Built with React JS | Learning Props
        </p>
      </footer>

    </div>
  );
}

export default App;
